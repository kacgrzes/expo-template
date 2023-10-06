import { Portal } from '@gorhom/portal'
import React, { NamedExoticComponent, PropsWithChildren, memo } from 'react'
import { View, Modal, TouchableWithoutFeedback } from 'react-native'

import { AbsoluteFullFill, Box, TouchableProps, ScrollView } from '../../atoms'
import { MenuItem } from '../../molecules/MenuItem'

import { useRef, useState, useMemo, useTheme, useCallback } from '~hooks'

type TriggerPosition = {
  x: number
  y: number
  width: number
  height: number
} | null
type TriggerState = {
  isOpen: boolean
}
type MenuProps = {
  trigger: (props: TouchableProps, state: TriggerState) => JSX.Element
  onOpen?: () => void
  onClose?: () => void
  closeOnSelect?: boolean
  isOpen?: boolean
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'left'
    | 'right'
  scrollable?: boolean
} & PropsWithChildren

type MenuComposition = NamedExoticComponent<MenuProps> & {
  Item: typeof MenuItem
}

const Menu = memo<MenuProps>(
  ({
    trigger,
    onOpen,
    onClose,
    closeOnSelect = true,
    scrollable = false,
    placement = 'bottomLeft',
    ...props
  }) => {
    const { shadows } = useTheme()
    const _modalRef = useRef<Modal>(null)
    const _triggerContainer = useRef<View>(null)
    const [triggerPosition, setTriggerPosition] = useState<TriggerPosition>(null)
    const [isOpen, setOpen] = useState(props.isOpen || false)

    const _measureTriggerPosition = useCallback(() => {
      if (_triggerContainer.current) {
        _triggerContainer.current?.measureInWindow((x, y, width, height) => {
          switch (placement) {
            case 'top':
              setTriggerPosition({ x, y: y - height, width, height })
              return
            case 'topLeft':
              setTriggerPosition({ x: x - width, y: y - height, width, height })
              return
            case 'topRight':
              setTriggerPosition({ x: x + width, y: y - height, width, height })
              return
            case 'bottom':
              setTriggerPosition({ x, y: y + height, width, height })
              return
            case 'bottomLeft':
              setTriggerPosition({ x: x - width, y: y + height, width, height })
              return
            case 'bottomRight':
              setTriggerPosition({ x: x + width, y: y + height, width, height })
              return
            case 'left':
              setTriggerPosition({ x: x - width, y, width, height })
              return
            case 'right':
              x = x + width
              setTriggerPosition({ x: x + width, y, width, height })
              return
            default:
              // default is bottomLeft
              setTriggerPosition({ x, y: y + height, width, height })
          }
        })
      }
    }, [placement])

    const handleOpen = useCallback(() => {
      setOpen(true)
      onOpen?.()
    }, [onOpen])

    const handleClose = useCallback(() => {
      setOpen(false)
      onClose?.()
    }, [onClose])

    const triggerTouchableProps = useMemo<TouchableProps>(
      () => ({
        onPress: handleOpen,
      }),
      [handleOpen]
    )

    return (
      <>
        <View ref={_triggerContainer} onLayout={_measureTriggerPosition}>
          {trigger(triggerTouchableProps, { isOpen })}
        </View>
        <Portal>
          <Modal
            ref={_modalRef}
            animationType="fade"
            transparent
            visible={isOpen}
            onRequestClose={handleClose}
          >
            <TouchableWithoutFeedback onPress={handleClose}>
              <AbsoluteFullFill backgroundColor="black" bgOpacity={0.1} />
            </TouchableWithoutFeedback>
            {triggerPosition && (
              <Box
                position="absolute"
                top={triggerPosition?.y}
                left={triggerPosition?.x}
                p={2}
                backgroundColor="white"
                borderRadius={4}
                {...shadows['4']}
              >
                <ScrollView scrollEnabled={scrollable}>
                  {React.Children.map(props.children, (child) => {
                    if (React.isValidElement(child)) {
                      return React.cloneElement(child, {
                        ...child.props,
                        onPress: () => {
                          if (closeOnSelect) {
                            handleClose()
                          }
                          child.props.onPress?.()
                        },
                      })
                    }
                    return child
                  })}
                </ScrollView>
              </Box>
            )}
          </Modal>
        </Portal>
      </>
    )
  }
) as MenuComposition

Menu.Item = MenuItem

export { Menu }

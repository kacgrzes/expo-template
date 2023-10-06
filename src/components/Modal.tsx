import {
  Modal as RNModal,
  ModalProps,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native'

import { KeyboardAwareScrollView } from './KeyboardAwareScrollView'

import { useTheme } from '~hooks'

type Props = {
  visible: boolean
  onRequestClose: () => void
  children: JSX.Element
  additionalWrapperStyle?: ViewStyle
  scrollable?: boolean
} & ModalProps

export const Modal = ({
  visible,
  onRequestClose,
  additionalWrapperStyle,
  scrollable = true,
  children,
  ...rest
}: Props): JSX.Element => {
  const { colors } = useTheme()
  const ScrollableComponent = scrollable ? KeyboardAwareScrollView : View

  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <SafeAreaView
          style={[
            styles.modal,
            { backgroundColor: colors.modalBackground },
            additionalWrapperStyle,
          ]}
        >
          <ScrollableComponent
            style={styles.scroll}
            contentContainerStyle={[styles.scrollContent, { background: colors.transparent }]}
            showsVerticalScrollIndicator={false}
          >
            <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
          </ScrollableComponent>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scroll: {
    paddingHorizontal: 32,
    width: '100%',
  },
  scrollContent: {
    justifyContent: 'center',
  },
})

import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

declare global {
  // PARAMS
  type HomeStackParamList = {
    Home: undefined
    Details: { id: string }
  }

  type ExampleStackParamList = {
    Examples: undefined
    Components: undefined
    Colors: undefined
    Typography: undefined
    DataFromBeScreen: undefined
  }

  type MainTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    ExamplesStack: NavigatorScreenParams<ExampleStackParamList>
  }

  type WebTabParamList = ExampleStackParamList & HomeStackParamList

  type RootStackParamList = {
    // unauthorized
    SignUp: undefined
    SignIn: undefined

    // authorized
    MainTab: NavigatorScreenParams<MainTabParamList>
    Settings: undefined

    // modals
    ApplicationInfo: undefined
    NotFound: undefined
  }

  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }

  // SCREENS - specific screens props
  // You can get navigation or route prop for every screen f. eg.
  // - HomeScreenNavigationProps['route']
  // - HomeScreenNavigationProps['navigation']

  type BottomTabScreenProps = BaseBottomTabScreenProps<
    MainTabParamList,
    'ExamplesStack' | 'HomeStack'
  >

  // Root stack
  type RootStackScreenProps = ScreenComposite

  // Home stack
  type HomeScreenProps = ScreenComposite<'Home'>
  type DetailsScreenProps = ScreenComposite<'Details'>

  // Examples stack
  type ExamplesScreenProps = ScreenComposite<'Examples'>
  type ComponentsScreenProps = ScreenComposite<'Components'>
}

// type ScreenHehe = ScreenComponent

// Helper types
type ScreenComposite<
  S extends keyof (RootStackParamList &
    HomeStackParamList &
    ExampleStackParamList) = keyof RootStackParamList
> = StackScreenProps<RootStackParamList & HomeStackParamList & ExampleStackParamList, S>

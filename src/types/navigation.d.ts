import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
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
  }

  type MainTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    ExamplesStack: NavigatorScreenParams<ExampleStackParamList>
  }

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

  // Home stack
  type HomeScreenProps = HomeStackComposite<'Home'>
  type DetailsScreenProps = HomeStackComposite<'Details'>

  // Examples stack
  type ExamplesScreenProps = ExamplesStackComposite<'Examples'>
  type ComponentsScreenProps = ExamplesStackComposite<'Components'>
}

type HomeStackComposite<S extends keyof HomeStackParamList> = CompositeScreenProps<
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, S>,
    BottomTabScreenProps<MainTabParamList, 'HomeStack'>
  >,
  StackScreenProps<RootStackParamList, 'MainTab'>
>

type ExamplesStackComposite<S extends keyof ExampleStackParamList> = CompositeScreenProps<
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, 'ExamplesStack'>,
    StackScreenProps<ExampleStackParamList, S>
  >,
  StackScreenProps<RootStackParamList, 'MainTab'>
>

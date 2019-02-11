import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation'

import Login from './screens/LoginScreen'
import Timeline from './screens/TimelineScreen'
import New from './screens/NewScreen'

const Routes = createSwitchNavigator({
  Login,
  App: createStackNavigator({
    Timeline,
    New,
  }),
})

export default createAppContainer(Routes)

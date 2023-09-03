// import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// screen
import Home from '../screens/Home'
import Settings from '../screens/Settings'

// components
import NavigationHeader from '../components/NavigationHeader'

// constants
import { HOME_SCREEN, SETTINGS_SCREEN } from './_common/routes'
import { SHARK } from '../constants/colors'
import { headerOptions } from './_common/navigationDefaults'

// lib
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName={HOME_SCREEN.name}
    screenOptions={{
      headerMode: 'screen',
      header: (props) => (<NavigationHeader {...props} />),
      cardStyle: { backgroundColor: SHARK }
    }}
  >
    <Stack.Screen
      name={HOME_SCREEN.name}
      component={Home}
      options={{
        ...headerOptions,
        title: 'Dashboard',
      }}
    />
    <Stack.Screen
      name={SETTINGS_SCREEN.name}
      component={Settings}
      options={{
        ...headerOptions,
        title: 'Settings',
      }}
    />
  </Stack.Navigator>
)

export default HomeStack

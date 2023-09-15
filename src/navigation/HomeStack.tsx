import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements'

// screen
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import PlacesScreen  from '../screens/Places'

// components
import NavigationHeader from '../components/NavigationHeader'
import IconComponent from '../components/IconComponent'

// constants
import { HOME_SCREEN, SETTINGS_SCREEN, PLACES_SCREEN } from './_common/routes'
import { SHARK } from '../constants/colors'
import { headerOptions } from './_common/navigationDefaults'

// lib
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName={HOME_SCREEN.name}
    screenOptions={({ navigation, route }) => ({
      headerMode: 'screen',
      header: (props) => {
        const title = getHeaderTitle({}, route.name)

        return (
          <NavigationHeader navigation={navigation} title={title} />
        )
      },
      cardStyle: { backgroundColor: SHARK }
    })}
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
      name={PLACES_SCREEN.name}
      component={PlacesScreen}
      options={{
        ...headerOptions,
        title: 'My places',
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

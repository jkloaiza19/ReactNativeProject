import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// components
import IconComponent from '../components/IconComponent'
import NavigationTabBar from '../components/NavigationTabBar'

// stacks
import HomeStack from './HomeStack'

// constants
import { HOME_SCREEN } from './_common/routes'
import { AMARANTH, SHARK } from '../constants/colors'
import { bottomNavOptions, tabBarStyles } from './_common/navigationDefaults'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = (): React.ReactElement => (
  <Tab.Navigator
    initialRouteName={HOME_SCREEN.name}
    screenOptions={{
      ...bottomNavOptions,
    }}
  >
    <Tab.Screen
      name="homeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <IconComponent name="home" size={size} color={color} />
        ),
        ...tabBarStyles,
      }}
    />
    <Tab.Screen
      name="homeStack2"
      component={HomeStack}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <IconComponent name="chevron-right" size={size} color={color} />
        ),
        ...tabBarStyles,
      }}
    />
    <Tab.Screen
      name="homeStack3"
      component={HomeStack}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <IconComponent name="user" size={size} color={color} />
        ),
        ...tabBarStyles,
      }}
    />
  </Tab.Navigator>
)

export default BottomTabNavigator


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabStack'
import AuthStack from './AuthStack'

const Stack = createStackNavigator()

const RootNavigation: React.ReactElement = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='auth'
        component={AuthStack}
      />
      <Stack.Screen
        name='root'
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default RootNavigation

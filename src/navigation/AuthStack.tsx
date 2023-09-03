import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../screens/Auth/Login'
import Signup from "../screens/Auth/Signup"

import { LOGIN_SCREEN, SIGNUP_SCREEN } from './_common/routes'

const Stack = createStackNavigator()

const AuthStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName={LOGIN_SCREEN.name}
    screenOptions={{
      headerMode: 'screen',
    }}
  >
    <Stack.Screen
      name={LOGIN_SCREEN.name}
      component={Login}
      options={{
        title: 'Login',
      }}
     />
     <Stack.Screen
       name={SIGNUP_SCREEN.name}
       component={Signup}
       options={{
        title: 'Sign up',
       }}
     />
  </Stack.Navigator>
)

export default AuthStack

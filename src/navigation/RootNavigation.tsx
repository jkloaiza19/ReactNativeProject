import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import BottomTabNavigator from './BottomTabStack'
import AuthStack from './AuthStack'
import { selectIsLoggedIn } from '../redux/auth/reducer'

const Stack = createStackNavigator()

interface Props {
  isLoggedIn: boolean | null
}

const RootNavigation = (): React.ReactElement =>  {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen
            name='authenticated'
            component={BottomTabNavigator}
          />
        ): (
        <Stack.Screen
            name='unauthenticated'
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

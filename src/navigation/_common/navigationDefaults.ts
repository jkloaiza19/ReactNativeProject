import type { StyleProp, TextStyle, StyleSheet, RegisteredStyle, ViewStyle } from 'react-native'
import { Animated } from 'react-native'

import { BLACK, WHITE, AMARANTH } from '../../constants/colors'

export const headerOptions:
  false | RegisteredStyle<TextStyle> | any |
  Animated.AnimatedInterpolation<string | number> = {
  headerTintColor: WHITE,
  headerStyle: {
    backgroundColor: BLACK,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: WHITE,
  }
}

export const tabBarStyles: Record<string, StyleProp<TextStyle>> = {
  tabBarItemStyle: { marginTop: 15 },
  tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14, marginTop: 8 },
}

export const bottomNavOptions = {
  tabBarActiveTintColor: AMARANTH,
  headerShown: false,
}
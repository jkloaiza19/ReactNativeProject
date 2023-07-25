import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import type { StyleProp, TextStyle } from 'react-native'

// components
import IconComponent from '../IconComponent'

// styles
import styles from './NavigationHeader.styles'

type Props = {
  navigation: Record<any, any>
  options: {
    headerStyle: StyleSheet
    headerTitleStyle: StyleProp<TextStyle>
    title: string
    headerTintColor: string
  }
  rightElement?: React.ReactElement
  leftElement?: React.ReactElement
}

/* The code is defining a functional component called `NavigationHeader` that takes in two props:
`navigation` and `options`. The component returns a JSX element that represents a navigation header. */
export const NavigationHeader: React.FC<Props> = ({
  navigation,
  options: {
    headerStyle,
    headerTitleStyle,
    headerTintColor,
    title,
  },
  rightElement,
  leftElement,
}: Props): React.ReactElement => (
  <View style={[styles.container, headerStyle]}>
    <View>
      {navigation.canGoBack() && (
        <>
         {leftElement ? leftElement : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <IconComponent name="chevron-left" size={16} color={headerTintColor} />
          </TouchableOpacity>
         )}
        </>
      )}
    </View>
    <View>
      <Text style={headerTitleStyle}>{title}</Text>
    </View>
    <View>
     {rightElement && rightElement}
    </View>
  </View>
)

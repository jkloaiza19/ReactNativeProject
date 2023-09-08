import React from 'react'
import { View, TouchableOpacity, Text, Animated } from 'react-native'
// import type { StyleProp, TextStyle, StyleSheet, RegisteredStyle, ViewStyle,  } from 'react-native'
// import type { HeaderBackButtonProps } from '@react-navigation/elements'

// components
import IconComponent from '../IconComponent'

// styles
import styles from './NavigationHeader.styles'

// interface Props {
//   navigation: Record<any, any>
//   options: {
//     headerStyle?: RegisteredStyle<ViewStyle> |
//     null | undefined | number | false | Animated.WithAnimatedObject<ViewStyle> | any
//     headerTitleStyle?: any
//     title?: string | undefined
//     headerTintColor?: string | undefined
//   }
//   rightElement?: boolean
//   leftElement?: React.ReactElement
// }

interface Props {
  disabled?: boolean | undefined
  navigation?: Record<any, any>
  back?: boolean | undefined
  title: string
}

/* The code is defining a functional component called `NavigationHeader` that takes in two props:
`navigation` and `options`. The component returns a JSX element that represents a navigation header. */
export const NavigationHeader: React.FC<Props> = ({
  navigation,
  // options: {
  //   headerStyle,
  //   headerTitleStyle,
  //   headerTintColor,
  //   title,
  // },
  // rightElement,
  // leftElement,
  disabled,
  back,
  title,
}: Props): React.ReactElement => (
  <View style={styles.container}>
    <View>
      {navigation?.canGoBack() && (
        <>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => navigation?.goBack()}>
            <IconComponent name="chevron-left" size={16} color={'white'} />
          </TouchableOpacity>
        </>
      )}
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View />
    {/* <View>
     {rightElement && rightElement}
    </View> */}
  </View>
)

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

type Props = {
  name: any
  size: number
  color: string
}

/**
 * The above function is a TypeScript React component that renders an icon with the specified name,
 * size, and color using the MaterialCommunityIcons library.
 * @param {Props}  - - `name`: The name of the icon to be displayed.
 */
export const IconComponent: React.ReactElement = ({ name, size, color }: Props) => (
  <FontAwesomeIcon icon={['fas', name]} size={size} color={color} />
)


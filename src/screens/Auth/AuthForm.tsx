import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// components
import IconComponent from '../../components/IconComponent'

// Material components
import {
  VStack,
  Button,
  TextInput,
  // Text,
  IconButton,
  ActivityIndicator,
} from '@react-native-material/core'

// constants
import { LOGIN_SCREEN, SIGNUP_SCREEN } from '../../navigation/_common/routes'

// styles
import styles from './AuthForm.styles'

type Props = {
  isLogin: boolean
  navigation: Record<string, any>
}

export const AuthForm = ({ isLogin, navigation }: Props): React.ReactElement => {
  // state
  const [showPassword, setShowPassword] = useState(false)

  const submitText = isLogin ? 'Login' : 'Signup'
  const helperText = isLogin
    ? 'Don\'t have an account yet?'
    : 'Already have an account?'
  const helperButtonText = isLogin
   ? 'Signup'
   : 'Login'
  const submitAction = () => navigation.replace('root')
  const helperButtonAction = () => navigation.navigate(isLogin ? SIGNUP_SCREEN.name : LOGIN_SCREEN.name)

  return (
    <View style={styles.formContainer}>
      <VStack m={4} spacing={4}>
        <TextInput
          label="Email"
          variant="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry={showPassword}
          autoCapitalize="none"
          label="Password"
          variant="outlined"
          trailing={() => (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <IconComponent name="eye" size={22} />
            </TouchableOpacity>
          )}
        />
        <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}>
          <Button title={submitText} onPress={submitAction} />
          <Text>
            {helperText}
            <TouchableOpacity onPress={helperButtonAction}>
              <Text>{helperButtonText}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </VStack>
    </View>
  )
}

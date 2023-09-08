import React, { useState } from 'react'
import { View, Text,  NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

// components
import IconComponent from '../../components/IconComponent'

// Material components
import {
  VStack,
  // Button,
  // TextInput,
  // Text,
  IconButton,
  ActivityIndicator,
} from '@react-native-material/core'

import { Button, Input, Icon } from '@rneui/themed'

// constants
import { LOGIN_SCREEN, SIGNUP_SCREEN } from '../../navigation/_common/routes'

// schema
import { Params } from '../../schemas/globalSchemas'

// styles
import styles from './AuthForm.styles'

type Props = {
  isLogin: boolean
  navigation: Record<string, any>
  isLoading: boolean
  submitAction: (params: Params) => void
}

interface IFormState {
  email: string
  password: string
}

export const AuthForm = ({ isLogin, navigation, submitAction, isLoading }: Props): React.ReactElement => {
  // state
  const [formState, setFormState] = useState<IFormState>({
    email: '',
    password: '',
  })

  const submitText = isLogin ? 'Login' : 'Signup'
  const helperText = isLogin
    ? 'Don\'t have an account yet?'
    : 'Already have an account?'
  const helperButtonText = isLogin
   ? 'Signup'
   : 'Login'

  const handleChange = (key: keyof typeof formState) =>
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setFormState({
        ...formState,
        [key]: e.nativeEvent.text,
      })
    }

  const helperButtonAction = () => navigation.replace(isLogin ? SIGNUP_SCREEN.name : LOGIN_SCREEN.name)
  const { email, password } = formState

  return (
    <View style={styles.formContainer}>
       <Text>email: {email}</Text>
       <Text>password: {password}</Text>
      <VStack m={4} spacing={4}>
         <Input
          id='email'
          autoCapitalize="none"
          textContentType='emailAddress'
          leftIcon={
            <IconComponent name="at" size={24} color={'black'} />
          }
          placeholder="Email"
          onChange={handleChange('email')} />
        <Input
          id="password"
          leftIcon={
            <IconComponent name="key" size={24} color={'black'} />
          }
          placeholder="Password"
          secureTextEntry={true}
          onChange={handleChange('password')} />

        <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}>
        <Button
            title={submitText}
            loading={isLoading}
            loadingProps={{
              size: 'small',
              color: styles.buttonLoadingColor.color,
            }}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            disabled={!email || !password || isLoading}
            onPress={() => submitAction({ email, password })}
          />
          <Text>
            {helperText}
            <Button type="clear" onPress={helperButtonAction}>
              <Text>{helperButtonText}</Text>
            </Button>
          </Text>
        </View>
      </VStack>
    </View>
  )
}

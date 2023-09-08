import React, { useEffect } from 'react'
import { Alert } from 'react-native'

// form
import { AuthForm } from '../AuthForm'

// material components
import { Snackbar, Button } from '@react-native-material/core'

// schema
import type { Params } from '../../../schemas/globalSchemas'
import type { ILoginProps } from '../schema'

export const Login = ({ navigation, signIn, auth }: ILoginProps): React.ReactElement => {
  const { authError, loading } = auth

  const submitAction = ({ email, password }: Params) => {
    signIn({ email, password })
  }

  if (authError) {
    Alert.alert('Authentication failed!', authError)
  }

  return (
    <>
      <AuthForm
        isLogin={true}
        navigation={navigation}
        submitAction={submitAction}
        isLoading={loading} />
      {authError && (
        <Snackbar
          message={authError}
          action={<Button variant="text" title="Dismiss" color="#BB86FC" compact />}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        />
      )}
    </>
  )
}
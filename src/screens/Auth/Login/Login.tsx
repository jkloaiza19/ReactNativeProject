import React from 'react'

// form
import { AuthForm } from '../AuthForm'

type Props = {
  navigation: any
}

export const Login = ({ navigation }: Props): React.ReactElement => (
  <AuthForm isLogin={true} navigation={navigation} />
)

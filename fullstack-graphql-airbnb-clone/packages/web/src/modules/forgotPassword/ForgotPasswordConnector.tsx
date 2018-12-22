import * as React from 'react'
import { LoginController } from '@abb/controller'
import ForgotPasswordView from './ui/ForgotPasswordView'

export const ForgotPasswordConnector = () => (
  <LoginController>
    {({ submit }) => <ForgotPasswordView submit={submit} />}
  </LoginController>
)

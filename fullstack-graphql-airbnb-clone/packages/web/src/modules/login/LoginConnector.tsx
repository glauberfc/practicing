import * as React from 'react'
import LoginView from './ui/LoginView'
import { LoginController } from '@abb/controller'

export const LoginConnector = () => (
  <LoginController>
    {({ submit }) => <LoginView submit={submit} />}
  </LoginController>
)

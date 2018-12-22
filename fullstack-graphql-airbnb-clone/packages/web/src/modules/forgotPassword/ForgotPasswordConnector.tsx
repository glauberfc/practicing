import * as React from 'react'
import ForgotPasswordView from './ui/ForgotPasswordView'
import { ForgotPasswordController } from '@abb/controller'

export const ForgotPasswordConnector = () => (
  <ForgotPasswordController>
    {({ submit }) => <ForgotPasswordView submit={submit} />}
  </ForgotPasswordController>
)

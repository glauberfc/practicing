import * as React from 'react'
import { RegisterView } from './ui/RegisterView'
import { RegisterController } from '@abb/controller'

export const RegisterConnector = () => (
  <RegisterController>
    {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
  </RegisterController>
)

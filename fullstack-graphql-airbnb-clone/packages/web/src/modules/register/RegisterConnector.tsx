import * as React from 'react'
import { RegisterView } from './ui/RegisterView'
import { RegisterController } from '@abb/controller'

export const RegisterConnector = () => (
  <RegisterController>
    {({ submit }) => <RegisterView submit={submit} />}
  </RegisterController>
)

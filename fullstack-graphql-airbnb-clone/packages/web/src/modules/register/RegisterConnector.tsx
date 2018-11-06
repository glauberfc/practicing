import * as React from 'react'
import { RegisterView } from './ui/RegisterView'

async function dummySubmit(values: any) {
  console.log(values)
  return null
}

export const RegisterConnector = () => <RegisterView submit={dummySubmit} />

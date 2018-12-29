import * as React from 'react'
import { RegisterView } from './ui/RegisterView'
import { RegisterController } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

export const RegisterConnector: React.SFC<RouteComponentProps<{}>> = props => {
  const onFinish = () => {
    props.history.push('/m/confirm-email', {
      message: 'Please, check your email to confirm your account',
    })
  }

  return (
    <RegisterController>
      {({ submit }) => <RegisterView onFinish={onFinish} submit={submit} />}
    </RegisterController>
  )
}

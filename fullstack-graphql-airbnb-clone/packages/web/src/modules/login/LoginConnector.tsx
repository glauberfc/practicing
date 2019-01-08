import * as React from 'react'
import LoginView from './ui/LoginView'
import { LoginController } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

export const LoginConnector: React.SFC<RouteComponentProps<{}>> = props => {
  const onFinish = () => {
    props.history.push('/')
  }

  return (
    <LoginController>
      {({ submit }) => <LoginView onFinish={onFinish} submit={submit} />}
    </LoginController>
  )
}

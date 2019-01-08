import * as React from 'react'
import LoginView from './ui/LoginView'
import { LoginController } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

export const LoginConnector: React.SFC<
  RouteComponentProps<{}, {}, { nextPage: string }>
> = props => {
  const onFinish = () => {
    const {
      history,
      location: { state },
    } = props

    if (state && state.nextPage) {
      return history.push(state.nextPage)
    }

    return history.push('/')
  }

  return (
    <LoginController>
      {({ submit }) => <LoginView onFinish={onFinish} submit={submit} />}
    </LoginController>
  )
}

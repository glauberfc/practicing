import * as React from 'react'
import ForgotPasswordView from './ui/ForgotPasswordView'
import { ForgotPasswordController } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

export const ForgotPasswordConnector = (props: RouteComponentProps) => {
  const onFinish = () => {
    props.history.push('/m/reset-email', {
      message: 'Please, check your email to reset your password',
    })
  }

  return (
    <ForgotPasswordController>
      {({ submit }) => (
        <ForgotPasswordView onFinish={onFinish} submit={submit} />
      )}
    </ForgotPasswordController>
  )
}

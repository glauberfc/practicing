import * as React from 'react'
import ChangePasswordView from './ui/ChangePasswordView'
import { ChangePasswordController } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

export const ChangePasswordConnector: React.SFC<
  RouteComponentProps<{ key: string }>
> = props => {
  const {
    match: {
      params: { key },
    },
  } = props
  console.log(key)

  const onFinish = () => {
    props.history.push('/login')
  }

  return (
    <ChangePasswordController>
      {({ submit }) => (
        <ChangePasswordView
          onFinish={onFinish}
          tokenKey={key}
          submit={submit}
        />
      )}
    </ChangePasswordController>
    // <ChangePasswordView submit={submit} />
  )
}

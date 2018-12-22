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

  return (
    <ChangePasswordController>
      {({ submit }) => (
        <ChangePasswordView
          submit={async ({ newPassword }) =>
            submit({
              key,
              newPassword,
            })
          }
        />
      )}
    </ChangePasswordController>
    // <ChangePasswordView submit={submit} />
  )
}

import * as React from 'react'
import gql from 'graphql-tag'
import { ChildMutateProps, graphql } from 'react-apollo'
import {
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
} from '../../schemaTypes'
import { NormalizedErrorsMap } from '../../types/NormalizedErrorsMap'

interface Props {
  onSessionId?: (sessionId: string) => void
  children: (
    data: {
      submit: (values: any) => Promise<NormalizedErrorsMap | null>
    }
  ) => JSX.Element | null
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
> {
  submit = async (values: ForgotPasswordMutationVariables) => {
    console.log(values)

    const response = await this.props.mutate({ variables: values })

    console.log('response: ', response)
    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const forgotPasswordMutation = gql`
  mutation ForgotPasswordMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`

export const ForgotPasswordController = graphql<
  Props,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>(forgotPasswordMutation)(C)

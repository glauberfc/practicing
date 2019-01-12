import * as React from 'react'
import gql from 'graphql-tag'
import {
  ChildMutateProps,
  graphql,
  MutationResult,
  withApollo,
  WithApolloClient,
} from 'react-apollo'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../utils/normalizeErrors'
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
    WithApolloClient<Props>,
    LoginMutation,
    LoginMutationVariables
  >
> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values)

    const {
      data: {
        login: { errors, sessionId },
      },
    } = (await this.props.mutate({
      variables: values,
    })) as MutationResult<any>

    // const response = await this.props.mutate({ variables: values })

    console.log('response: ', errors, sessionId)

    if (errors) {
      return normalizeErrors(errors)
    }

    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId)
    }

    await this.props.client.resetStore()

    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(withApollo<Props>(C as any))

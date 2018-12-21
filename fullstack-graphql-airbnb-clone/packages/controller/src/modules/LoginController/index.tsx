import * as React from 'react'
import gql from 'graphql-tag'
import { ChildMutateProps, graphql } from 'react-apollo'
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes'
// import { normalizeErrors } from '../utils/normalizeErrors'

interface Props {
  children: (
    data: {
      submit: (
        values: any
      ) => Promise<{
        [key: string]: string
      } | null>
    }
  ) => JSX.Element | null
}

class C extends React.Component<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values)

    // const {
    //   data: { login },
    // } = await this.props.mutate({
    //   variables: values,
    // })

    const response = await this.props.mutate({ variables: values })

    console.log('response: ', response)

    // if (login) {
    //   return normalizeErrors(login)
    // }

    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(C)

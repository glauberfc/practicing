import * as React from 'react'
import { graphql, ChildMutateProps, MutationResult } from 'react-apollo'
import gql from 'graphql-tag'

import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes'
import { normalizeErrors } from '../utils/normalizeErrors'
import { NormalizedErrorsMap } from '../../types/NormalizedErrorsMap'
interface Props {
  children: (
    data: {
      submit: (values: any) => Promise<NormalizedErrorsMap | null>
    }
  ) => JSX.Element | null
}

class RegisterControllerComponent extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values)

    const {
      data: { register },
    } = (await this.props.mutate({
      variables: values,
    })) as MutationResult<any>

    console.log('response: ', register)

    if (register) {
      normalizeErrors(register)
    }

    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(RegisterControllerComponent)

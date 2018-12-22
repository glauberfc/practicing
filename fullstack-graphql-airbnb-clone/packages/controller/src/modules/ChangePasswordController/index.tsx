import * as React from 'react'
import gql from 'graphql-tag'
import { ChildMutateProps, graphql, MutationResult } from 'react-apollo'
import {
  ForgotPasswordChange,
  ForgotPasswordChangeVariables,
} from '../../schemaTypes'
import { normalizeErrors } from '../utils/normalizeErrors'
import { NormalizedErrorsMap } from '../../types/NormalizedErrorsMap'

interface Props {
  children: (
    data: {
      submit: (values: any) => Promise<NormalizedErrorsMap | null>
    }
  ) => JSX.Element | null
}

class C extends React.PureComponent<
  ChildMutateProps<Props, ForgotPasswordChange, ForgotPasswordChangeVariables>
> {
  submit = async (values: ForgotPasswordChangeVariables) => {
    console.log(values)

    const {
      data: { forgotPasswordChange },
    } = (await this.props.mutate({
      variables: values,
    })) as MutationResult<any>

    console.log('response: ', forgotPasswordChange)

    if (forgotPasswordChange) {
      return normalizeErrors(forgotPasswordChange)
    }

    return null
  }

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const forgotPasswordChangeMutation = gql`
  mutation ForgotPasswordChange($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`

export const ChangePasswordController = graphql<
  Props,
  ForgotPasswordChange,
  ForgotPasswordChangeVariables
>(forgotPasswordChangeMutation)(C)

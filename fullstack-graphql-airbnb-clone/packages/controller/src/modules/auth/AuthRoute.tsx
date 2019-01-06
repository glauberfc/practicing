import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, ChildProps } from 'react-apollo'
import { RouteProps, Route, RouteComponentProps, Redirect } from 'react-router'
import { MeQuery } from '../../schemaTypes'

type Props = RouteProps

class AuthRouteComponent extends React.PureComponent<
  ChildProps<Props, MeQuery>
> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props

    if (!data || data.loading) {
      return null
    }

    if (!data.me) {
      return <Redirect to="/login" />
    }

    const Component = component as any

    return <Component {...routeProps} />
  }

  render() {
    const { data, component, ...rest } = this.props
    return <Route {...rest} render={this.renderRoute} />
  }
}

const meQuery = gql`
  query MeQuery {
    me {
      id
      email
    }
  }
`

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(AuthRouteComponent)

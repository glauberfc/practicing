import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class TextPages extends React.PureComponent<
  RouteComponentProps<{}>
> {
  render() {
    console.log(this.props)
    const { state } = this.props.location
    return <h3>{state && state.message ? state.message : 'Hello'}</h3>
  }
}

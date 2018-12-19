import * as React from 'react'
import { Button } from 'react-native-elements'

class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <Button
        style={{ marginTop: 70 }}
        title="Button"
        onPress={() => console.log('Button pressed')}
      />
    )
  }
}

export default RegisterConnector

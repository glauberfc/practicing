import * as React from 'react'
import { View } from 'react-native'
import { Formik, withFormik, FormikErrors, Field } from 'formik'
import { validUserSchema } from '@abb/common'
import InputField from '../../shared/InputField'
import { Button, Card } from 'react-native-elements'

interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

const RegisterView: React.SFC<Formik<FormValues> & Props> = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Card title="Register">
        <Field
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          component={InputField}
        />
        <Field
          name="password"
          placeholder="Password"
          secureTextEntry
          component={InputField}
        />
        <Button
          title="Submit"
          onPress={props.handleSubmit as any}
          buttonStyle={{ marginTop: 30 }}
          backgroundColor="#03A9F4"
        />
      </Card>
    </View>
  )
}

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values)

    if (errors) {
      setErrors(errors)
    }
  },
})(RegisterView as any)

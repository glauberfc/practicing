import * as React from 'react'
import { View } from 'react-native'
import { Formik, withFormik, FormikErrors, Field } from 'formik'
import { validUserSchema } from '@abb/common'
import InputField from '../../shared/InputField'
import { Button } from 'react-native-elements'

interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

const RegisterView: React.SFC<Formik<FormValues> & Props> = props => {
  return (
    <View>
      <Field name="email" placeholder="Email" component={InputField} />
      <Field
        name="password"
        placeholder="Password"
        secureTextEntry
        component={InputField}
      />
      <Button title="Submit" onPress={props.handleSubmit as any} />
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

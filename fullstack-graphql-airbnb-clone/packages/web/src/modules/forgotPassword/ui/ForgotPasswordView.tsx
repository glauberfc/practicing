import * as React from 'react'
import { withFormik, FormikProps, Form, Field } from 'formik'
import { InputField } from '../../shared/InputField'
import { Button } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Link } from 'react-router-dom'
import { NormalizedErrorsMap } from '@abb/controller'

interface FormValues {
  email: string
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorsMap | null>
}

const ForgotPasswordView: React.SFC<
  FormikProps<FormValues> & Props
> = props => {
  return (
    <Form style={{ display: 'flex' }}>
      <div style={{ width: 400, margin: '20px auto' }}>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          component={InputField}
        />

        <FormItem>
          <Button type="primary" htmlType="submit">
            Reset password
          </Button>
        </FormItem>

        <FormItem>
          Or <Link to="/login">login!</Link>
        </FormItem>
      </div>
    </Form>
  )
}

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values)

    if (errors) {
      setErrors(errors)
    }
  },
})(ForgotPasswordView)

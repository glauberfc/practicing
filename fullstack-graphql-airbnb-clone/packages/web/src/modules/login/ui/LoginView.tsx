import * as React from 'react'
import { withFormik, FormikProps, Form, Field } from 'formik'
import { validUserSchema } from '@abb/common'
import { InputField } from '../../shared/InputField'
import { Button } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Link } from 'react-router-dom'
import { NormalizedErrorsMap } from '@abb/controller'

interface FormValues {
  email: string
  password: string
}

interface Props {
  onFinish: () => void
  submit: (values: FormValues) => Promise<NormalizedErrorsMap | null>
}

const LoginView: React.SFC<FormikProps<FormValues> & Props> = props => {
  return (
    <Form style={{ display: 'flex' }}>
      <div style={{ width: 400, margin: '20px auto' }}>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={InputField}
        />

        <FormItem>
          <Link to="/forgot-password">Forgot password?</Link>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </FormItem>

        <FormItem>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </div>
    </Form>
  )
}

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values)

    if (errors) {
      setErrors(errors)
    } else {
      props.onFinish()
    }
  },
})(LoginView)

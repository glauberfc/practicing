import * as React from 'react'
import * as Antd from 'antd'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik'
import { validUserSchema } from '@abb/common'
import { InputField } from '../../shared/InputField'

const { Form: FormAnt, Icon, Button } = Antd
const FormItem = FormAnt.Item
interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: '20px auto' }}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            component={InputField}
          />

          <Field
            name="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="password"
            component={InputField}
          />

          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>

          <FormItem>
            Or <a href="">register now!</a>
          </FormItem>
        </div>
      </Form>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
})(C)

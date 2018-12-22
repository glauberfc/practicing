import * as React from 'react'
import { withFormik, FormikProps, Form, Field } from 'formik'
import { InputField } from '../../shared/InputField'
import { Button, Icon } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Link } from 'react-router-dom'
import { NormalizedErrorsMap } from '@abb/controller'
import { newPasswordValidation } from '@abb/common'

interface FormValues {
  newPassword: string
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorsMap | null>
}

const ChangePasswordView: React.SFC<
  FormikProps<FormValues> & Props
> = props => {
  return (
    <Form style={{ display: 'flex' }}>
      <div style={{ width: 400, margin: '20px auto' }}>
        <Field
          name="newPassword"
          type="password"
          placeholder="New Password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          component={InputField}
        />

        <FormItem>
          <Button type="primary" htmlType="submit">
            Change Password
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
  validationSchema: newPasswordValidation,
  mapPropsToValues: () => ({ newPassword: '' }),
  handleSubmit: async (values, { props, setErrors, resetForm }) => {
    console.log(values)
    const errors = await props.submit(values)

    if (errors) {
      setErrors(errors)
    }

    resetForm()
  },
})(ChangePasswordView)

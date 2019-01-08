import * as React from 'react'
import { FieldProps } from 'formik'
import { Form, Select } from 'antd'

const FormItem = Form.Item

export const TagField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode
    label?: string
  }
> = ({
  field: { onChange, onBlur: _, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name]

  return (
    <FormItem
      label={label}
      help={errMsg}
      validateStatus={errMsg ? 'error' : undefined}
    >
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={(newValue: any) => setFieldValue(field.name, newValue)}
      />
    </FormItem>
  )
}

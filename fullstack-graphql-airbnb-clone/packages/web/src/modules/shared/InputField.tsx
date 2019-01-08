import * as React from 'react'
import { FieldProps } from 'formik'
import { Form, Input, InputNumber } from 'antd'

const FormItem = Form.Item

export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode
    label?: string
    useNumberComponent: boolean
  }
> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name]

  const Comp: React.ReactType = useNumberComponent ? InputNumber : Input

  return (
    <FormItem
      label={label}
      help={errMsg}
      validateStatus={errMsg ? 'error' : undefined}
    >
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (newValue: number) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  )
}

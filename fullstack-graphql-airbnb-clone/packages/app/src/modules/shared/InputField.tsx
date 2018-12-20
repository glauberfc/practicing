import * as React from 'react'
import { FieldProps } from 'formik'
import { View } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements'

interface Props {
  placeholder: string
}

const InputField: React.SFC<FieldProps<any> & Props> = ({
  placeholder,
  field: { name, value },
  form: { touched, errors, handleChange, handleBlur },
  ...props
}) => {
  return (
    <View>
      <FormLabel>{placeholder}</FormLabel>
      <FormInput
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...props}
      />
      {errors[name] &&
        touched[name] && (
          <FormValidationMessage>{errors[name]}</FormValidationMessage>
        )}
    </View>
  )
}

export default InputField

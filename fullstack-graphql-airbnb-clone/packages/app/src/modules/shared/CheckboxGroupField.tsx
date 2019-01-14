import * as React from 'react'
import { FieldProps } from 'formik'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'

interface Props {
  options: string[]
}

const CheckboxGroupField: React.SFC<FieldProps<any> & Props> = ({
  field: { name, value },
  form: { setFieldValue },
  options,
}) => {
  const onPress = (optionName: string, isChecked: boolean) => {
    if (isChecked) {
      setFieldValue(name, value.filter((x: string) => x !== optionName))
    } else {
      setFieldValue(name, [...value, optionName])
    }
  }
  return (
    <View>
      {options.map(option => {
        const isChecked = value.includes(option)

        return (
          <CheckBox
            key={option}
            title={option}
            checked={isChecked}
            onPress={() => onPress(option, isChecked)}
          />
        )
      })}
    </View>
  )
}

export default CheckboxGroupField

import * as React from 'react'
import { FieldProps } from 'formik'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { ImagePicker, Permissions } from 'expo'
import { ReactNativeFile } from 'apollo-upload-client'

const PictureField: React.SFC<FieldProps<any> & { title: string }> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  const onPress = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)

    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.CAMERA_ROLL)
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync({})

    if (!imageResult.cancelled) {
      const file = new ReactNativeFile({
        uri: imageResult.uri,
        type: imageResult.type,
        name: 'picture',
      })

      setFieldValue(name, file)
    }
  }

  return (
    <View>
      <Button {...props} onPress={onPress} />
    </View>
  )
}

export default PictureField

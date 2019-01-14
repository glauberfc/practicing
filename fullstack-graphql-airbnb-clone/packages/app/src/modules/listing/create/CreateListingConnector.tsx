import * as React from 'react'
import { Formik, Field, FormikActions } from 'formik'
import { withCreateListing, WithCreateListing } from '@abb/controller'
import { RouteComponentProps } from 'react-router-native'
import { View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'

import InputField from '../../shared/InputField'
import CheckboxGroupField from '../../shared/CheckboxGroupField'
import PictureField from '../../shared/PictureField'

interface FormValues {
  name: string
  picture: null
  category: string
  description: string
  price: string
  beds: string
  guests: string
  latitude: string
  longitude: string
  amenities: string[]
}

class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    { price, beds, guests, latitude, longitude, ...values }: FormValues,
    { setSubmitting }: FormikActions<FormValues>
  ) => {
    await this.props.creatingListing({
      ...values,
      price: parseInt(price, 10),
      beds: parseInt(beds, 10),
      guests: parseInt(guests, 10),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    })
    setSubmitting(false)
  }

  render() {
    return (
      <Formik<FormValues>
        initialValues={{
          name: '',
          picture: null,
          category: '',
          description: '',
          price: '0',
          beds: '0',
          guests: '0',
          latitude: '0',
          longitude: '0',
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {({ handleSubmit }) => (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 30, marginBottom: 10 }}>
                Create listing
              </Text>
              <Field name="name" placeholder="Name" component={InputField} />
              <Field
                name="picture"
                title="Pick a picture"
                component={PictureField}
              />
              <Field
                name="category"
                placeholder="Category"
                component={InputField}
              />
              <Field
                name="description"
                placeholder="Description"
                component={InputField}
              />
              <Field
                label="Price"
                name="price"
                placeholder="Price"
                useNumberComponent
                keyboardType="numeric"
                component={InputField}
              />
              <Field
                label="Beds"
                name="beds"
                placeholder="Beds"
                useNumberComponent
                keyboardType="numeric"
                component={InputField}
              />
              <Field
                label="Guests"
                name="guests"
                placeholder="Guests"
                useNumberComponent
                keyboardType="numeric"
                component={InputField}
              />
              <Field
                label="Latitude"
                name="latitude"
                placeholder="Latitude"
                useNumberComponent
                keyboardType="numeric"
                component={InputField}
              />
              <Field
                label="Longitude"
                name="longitude"
                placeholder="Longitude"
                useNumberComponent
                keyboardType="numeric"
                component={InputField}
              />
              <Field
                name="amenities"
                options={['pool', 'basketball court', 'soccer field', 'yard']}
                component={CheckboxGroupField}
              />
              <Button
                title="Save listing"
                onPress={handleSubmit}
                style={{ marginTop: 30 }}
                backgroundColor="#03A9F4"
              />
            </ScrollView>
          </View>
        )}
      </Formik>
    )
  }
}

export default withCreateListing(CreateListingConnector)

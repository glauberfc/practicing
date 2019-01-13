import * as React from 'react'
import { Formik, Field } from 'formik'
import { withCreateListing, WithCreateListing } from '@abb/controller'
import { RouteComponentProps } from 'react-router-native'
import { View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'

import InputField from '../../shared/InputField'

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
    values: FormValues
    // { setSubmitting }
  ) => {
    console.log(values)

    // await this.props.creatingListing(values)
    // setSubmitting(false)
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
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 30, marginBottom: 10 }}>
                Create listing
              </Text>
              <Field name="name" placeholder="Name" component={InputField} />
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
                component={InputField}
              />
              <Field
                label="Beds"
                name="beds"
                placeholder="Beds"
                useNumberComponent
                component={InputField}
              />
              <Field
                label="Guests"
                name="guests"
                placeholder="Guests"
                useNumberComponent
                component={InputField}
              />
              <Field
                label="Latitude"
                name="latitude"
                placeholder="Latitude"
                useNumberComponent
                component={InputField}
              />
              <Field
                label="Longitude"
                name="longitude"
                placeholder="Longitude"
                useNumberComponent
                component={InputField}
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

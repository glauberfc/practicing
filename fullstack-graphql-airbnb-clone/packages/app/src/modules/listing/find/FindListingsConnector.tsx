import * as React from 'react'
import { WithFindListings, withFindListings } from '@abb/controller'
import { Card, Text } from 'react-native-elements'
import { ScrollView, View } from 'react-native'

class C extends React.PureComponent<WithFindListings> {
  render() {
    const { listings, loading } = this.props

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {loading && <Text>Loading...</Text>}

        <ScrollView style={{ marginTop: 10 }}>
          {listings.map(listing => (
            <Card
              key={listing.id}
              title={listing.name}
              image={
                listing.pictureUrl ? { uri: listing.pictureUrl } : undefined
              }
            >
              <Text style={{ marginBottom: 10 }}>
                Owner: {listing.owner.email}
              </Text>
            </Card>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export const FindListingsConnector = withFindListings(C)

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {
  CreateListingMutation,
  CreateListingMutationVariables,
} from '../../schemaTypes'

const createListingMutation = gql`
  mutation CreateListingMutation(
    $name: String!
    $picture: Upload
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guests: Int!
    $latitude: Float!
    $longitude: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        name: $name
        picture: $picture
        category: $category
        description: $description
        price: $price
        beds: $beds
        guests: $guests
        latitude: $latitude
        longitude: $longitude
        amenities: $amenities
      }
    )
  }
`

export interface WithCreateListing {
  creatingListing: (variables: CreateListingMutationVariables) => void
}

export const withCreateListing = graphql<
  any,
  CreateListingMutation,
  CreateListingMutationVariables,
  WithCreateListing
>(createListingMutation, {
  props: ({ mutate }) => ({
    creatingListing: async variables => {
      if (!mutate) {
        return
      }

      const response = await mutate({ variables })
      console.log(response)
    },
  }),
})

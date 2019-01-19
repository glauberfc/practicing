import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {
  ViewListingQuery,
  ViewListingQuery_viewListing,
  ViewListingQueryVariables,
} from '../../schemaTypes'

const viewListingQuery = gql`
  query ViewListingQuery($id: String!) {
    viewListing(id: $id) {
      id
      name
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`

export interface WithViewListing {
  listing: ViewListingQuery_viewListing | null
  loading: boolean
}

export const withViewListing = graphql<
  any,
  ViewListingQuery,
  ViewListingQueryVariables,
  WithViewListing
>(viewListingQuery, {
  props: ({ data }) => {
    let listing: ViewListingQuery_viewListing | null = null

    if (data && !data.loading && data.viewListing) {
      listing = data.viewListing
    }

    return {
      listing,
      loading: data ? data.loading : false,
    }
  },
  options: ({
    match: {
      params: { listingId },
    },
  }) => {
    return {
      variables: {
        id: listingId,
      },
    }
  },
})

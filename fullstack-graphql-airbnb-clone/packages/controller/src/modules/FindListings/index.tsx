import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {
  FindListingQuery,
  FindListingQuery_findListings,
} from '../../schemaTypes'

const findListingsQuery = gql`
  query FindListingQuery {
    findListings {
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

export interface WithFindListings {
  listings: FindListingQuery_findListings[]
  loading: boolean
}

export const withFindListings = graphql<
  any,
  FindListingQuery,
  {},
  WithFindListings
>(findListingsQuery, {
  props: ({ data }) => {
    let listings: FindListingQuery_findListings[] = []

    if (data && data.findListings && !data.loading) {
      listings = data.findListings
    }

    return {
      listings,
      loading: data ? data.loading : false,
    }
  },
})

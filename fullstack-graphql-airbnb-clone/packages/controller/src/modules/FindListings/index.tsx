import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {
  FindListingQuery,
  FindListingQuery_findListings,
} from '../../schemaTypes'

const findListginsQuery = gql`
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

export const WithFindListings = graphql<
  any,
  FindListingQuery,
  {},
  WithFindListings
>(findListginsQuery, {
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

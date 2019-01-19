import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { WithViewListing, withViewListing } from '@abb/controller'

interface Props {
  listingId: string
}

const ViewListingConnector: React.SFC<
  RouteComponentProps<Props> & WithViewListing
> = ({ listing, loading }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return <div>{listing && listing.name}</div>
}

export default withViewListing(ViewListingConnector)

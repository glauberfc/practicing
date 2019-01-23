import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
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

  return (
    <div>
      <div>{listing && listing.name}</div>
      <Link to={listing ? `/listing/${listing.id}/chat` : ''}>Chat</Link>
    </div>
  )
}

export default withViewListing(ViewListingConnector)

import * as React from 'react'
import { Card } from 'antd'
import { WithFindListings, withFindListings } from '@abb/controller'

const { Meta } = Card

class FindListingsConnector extends React.PureComponent<WithFindListings> {
  render() {
    const { listings, loading } = this.props

    return (
      <div>
        {loading && <div>...loading</div>}

        {listings.map(listing => (
          <Card
            key={`${listing.id}-card`}
            hoverable
            style={{ width: 240 }}
            cover={
              listing.pictureUrl && (
                <img alt="example" src={listing.pictureUrl} />
              )
            }
          >
            <Meta title={listing.name} description={listing.owner.email} />
          </Card>
        ))}
      </div>
    )
  }
}

export default withFindListings(FindListingsConnector)

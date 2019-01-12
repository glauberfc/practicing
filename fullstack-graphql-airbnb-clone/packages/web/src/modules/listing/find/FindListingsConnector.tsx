import * as React from 'react'
import { Card } from 'antd'
import { WithFindListings } from '@abb/controller'

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
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={listing.name} description="www.instagram.com" />
          </Card>
        ))}
      </div>
    )
  }
}

export default WithFindListings(FindListingsConnector)

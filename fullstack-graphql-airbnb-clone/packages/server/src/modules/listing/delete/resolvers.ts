import { ResolverMap } from '../../../types/graphql-utils'
import { Listing } from '../../../entity/Listing'

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      if (session.userId) {
        throw new Error('Not authenticated')
      }

      const listing = await Listing.findOne({ where: { id } })

      if (!listing) {
        throw new Error('does not exist')
      }

      if (session.userId !== listing.userId) {
        console.log(
          `this user ${
            session.userId
          } is trying to delete a listing they don't own`
        )

        throw new Error('not authorized')
      }

      await Listing.remove(listing)

      return true
    },
  },
}

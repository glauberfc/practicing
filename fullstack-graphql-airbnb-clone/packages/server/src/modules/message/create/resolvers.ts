import { ResolverMap } from '../../../types/graphql-utils'
import { Message } from '../../../entity/Message'

export const resolvers: ResolverMap = {
  Mutation: {
    createMessages: async (_, { message }, { session }) => {
      // isAuthenticated(session)
      await Message.create({
        ...message,
        userId: session.userId,
      }).save()

      return true
    },
  },
}

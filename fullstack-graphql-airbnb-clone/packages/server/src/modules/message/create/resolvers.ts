import { ResolverMap } from '../../../types/graphql-utils'
import { Message } from '../../../entity/Message'
import { PUBSUB_NEW_MESSAGE } from '../shared/constants'

export const resolvers: ResolverMap = {
  Mutation: {
    createMessages: async (_, { message }, { session, pubsub }) => {
      // isAuthenticated(session)
      const dbMessage = await Message.create({
        ...message,
        userId: session.userId,
      }).save()

      pubsub.publish(PUBSUB_NEW_MESSAGE, {
        newMessage: dbMessage,
      })

      return true
    },
  },
}

import * as shortid from 'shortid'
import { createWriteStream } from 'fs'

import { ResolverMap } from '../../../types/graphql-utils'
import { Listing } from '../../../entity/Listing'
// import { isAuthenticated } from '../../shared/isAuthenticated'

const storeUpload = async ({ stream }: any): Promise<any> => {
  const id = shortid.generate()
  const path = `images/${id}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject)
  )
}

const processUpload = async (upload: any) => {
  const { stream, filename } = await upload
  const { id } = await storeUpload({ stream, filename })
  return id
}

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, ...data } }, { session }) => {
      // isAuthenticated(session)
      const pictureUrl = await processUpload(picture)

      await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId,
      }).save()

      return true
    },
  },
}

const testData = { message: 'Hello' }

const controllers = {
  getOne: model => {
    Promise.resolve(testData)
  },
}

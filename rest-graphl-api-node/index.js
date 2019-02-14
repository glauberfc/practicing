const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json('Hello, world!')
})

const apiRouter = express.Router()
apiRouter.route('/').get((req, res) => res.json('Hello, API'))

app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})


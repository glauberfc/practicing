const express = require('express')
const restRouter = require('./api')

const app = express()

app.get('/', (req, res) => {
  res.json('Hello, world!')
})

app.use('/api', restRouter.router)

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})

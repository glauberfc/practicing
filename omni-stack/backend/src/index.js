const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect(
  'mongodb://admin:abc123@ds123625.mlab.com:23625/omni-stack-db',
  {
    useNewUrlParser: true,
  }
)

app.use((req, _, next) => {
  req.io = io

  return next()
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
  console.log('Server starter on port http://localhost:3000')
})

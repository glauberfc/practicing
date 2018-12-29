const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// const logger = (req, res, next) => {
//   console.log('Loggin...')
//   next()
// }

// app.use(logger)

// Body parser middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// Set static path
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.json({
    name: 'Glauber',
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

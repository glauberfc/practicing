const express = require('express')
const mongoose = require('mongoose')

const router = require('./router')
const databaseConfig = require('./config/database')

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
  }

  middlewares() {
    this.express.use(express.json())
  }

  routes() {
    this.express.use(router)
  }
}

module.exports = new App().express

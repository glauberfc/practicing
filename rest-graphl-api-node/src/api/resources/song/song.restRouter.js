const express = require('express')
const controller = require('./song.controller')

const songRouter = express.Router()

songRouter.route('/').get(controller.getSongs)

module.exports = songRouter

const express = require('express')
const controller = require('./playlist.controller')

const playlistRouter = express.Router()

playlistRouter.route('/').get(controller.getPlaylists)

module.exports = playlistRouter

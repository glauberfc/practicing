const express = require('express')

const playlistRouter = express.Router()

playlistRouter.route('/').get((req, res) => res.json('Get Playlist'))

module.exports = playlistRouter

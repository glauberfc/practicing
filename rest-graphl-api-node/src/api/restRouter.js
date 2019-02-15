const express = require('express')
const userRouter = require('./resources/user')
const playlistRouter = require('./resources/playlist')
const songRouter = require('./resources/song')

const restRouter = express.Router()

restRouter.use('/user', userRouter.user)
restRouter.use('/playlist', playlistRouter.playlist)
restRouter.use('/song', songRouter.song)

module.exports = restRouter

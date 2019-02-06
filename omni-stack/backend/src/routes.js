const express = require('express')

const TweetController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router()

routes.get('/tweets', TweetController.read)
routes.post('/tweet', TweetController.create)

routes.put('/likes/:id', LikeController.update)

module.exports = routes

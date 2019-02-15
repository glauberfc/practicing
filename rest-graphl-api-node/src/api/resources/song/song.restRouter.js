const express = require('express')

const songRouter = express.Router()

songRouter.route('/').get((req, res) => res.json('Get Song!'))

module.exports = songRouter
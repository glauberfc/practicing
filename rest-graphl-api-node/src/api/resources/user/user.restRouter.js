const express = require('express')

const userRouter = express.Router()

userRouter.route('/').get((req, res) => res.json('Get user'))

module.exports = userRouter

const express = require('express')
const controller = require('./user.controller')

const userRouter = express.Router()

userRouter.route('/').get(controller.getUsers)

module.exports = userRouter

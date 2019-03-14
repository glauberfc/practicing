const express = require('express')

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

const router = express.Router()

router.post('/users', controllers.UserController.store)
router.post('/sessions', controllers.SessionController.store)

router.use(authMiddleware)

/**
 * Ad
 */
router.get('/ads', controllers.AdController.index)
router.get('/ads/:id', controllers.AdController.show)
router.post('/ads', controllers.AdController.store)
router.put('/ads/:id', controllers.AdController.update)
router.delete('/ads/:id', controllers.AdController.destroy)

module.exports = router

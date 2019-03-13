const express = require('express')
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middlewares/auth')

const router = express.Router()

router.post('/users', UserController.store)
router.post('/sessions', SessionController.store)

router.get('/test', authMiddleware, (req, res) => res.json({ ok: 'true' }))

module.exports = router

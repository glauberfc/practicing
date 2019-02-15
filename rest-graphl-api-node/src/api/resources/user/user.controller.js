const user = require('../../model/User')

const getUsers = (req, res, next) => res.json(user)

module.exports = {
  getUsers: getUsers,
}

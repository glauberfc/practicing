const Song = require('../../model/Song')

const getSongs = (req, res, next) => res.json(Song)

module.exports = {
  getSongs: getSongs,
}

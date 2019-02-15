const Playlist = require('../../model/Playlist')

const getPlaylists = (req, res, next) => res.json(Playlist)

module.exports = { getPlaylists: getPlaylists }

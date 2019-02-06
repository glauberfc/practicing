const Tweet = require('../models/Tweet')

module.exports = {
  async read(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt')

    res.json(tweets)
  },
  async create(req, res) {
    const tweet = await Tweet.create(req.body)

    req.io.emit('tweet', tweet)

    return res.json(tweet)
  },
}

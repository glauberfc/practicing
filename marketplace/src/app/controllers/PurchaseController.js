const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    try {
      await Mail.sendMail({
        from: '"Marketplace" <marketplace@mail.com>',
        to: purchaseAd.author.email,
        subject: `Puchase request: "${purchaseAd.title}"`,
        template: 'purchase',
        context: { ad: purchaseAd, user, content }
      })
    } catch (error) {
      console.log(error)
    }

    return res.send()
  }
}

module.exports = new PurchaseController()

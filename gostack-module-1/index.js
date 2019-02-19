const express = require('express')
const nunjuncks = require('nunjucks')

const app = express()

nunjuncks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('home')
})

app.post('/check', (req, res) => {
  const { age } = req.body

  if (age > 18) {
    return res.redirect(`/major?age=${age}`)
  }

  return res.redirect(`/minor?age=${age}`)
})

const checkAgeQueryParam = (req, res, next) => {
  if (!req.query.age) {
    return res.redirect('/')
  }

  return next()
}

app.get('/major', checkAgeQueryParam, (req, res) => {
  return res.render('major', { age: req.query.age })
})

app.get('/minor', checkAgeQueryParam, (req, res) => {
  return res.render('minor', { age: req.query.age })
})

app.listen(3000)

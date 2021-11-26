const { Router } = require('express')

// resource
const resource = require('../content/countries.json')

const router = Router()

router.use('/countries', (req, res) => {
  res.json(resource)
})

module.exports = router

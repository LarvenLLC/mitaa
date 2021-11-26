const { Router } = require('express')

// resource
const resource = require('../content/regions.json')

const router = Router()

router.use('/regions', (req, res) => {
  res.json(resource)
})

module.exports = router

const { Router } = require('express')

// resource
const resource = require('../content/districts.json')

const router = Router()

router.use('/districts', (req, res) => {
  res.json(resource)
})

module.exports = router

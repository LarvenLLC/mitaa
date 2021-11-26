const { Router } = require('express')

// resource
const resource = require('../content/wards.json')

const router = Router()

router.use('/wards', (req, res) => {
  res.json(resource)
})

module.exports = router

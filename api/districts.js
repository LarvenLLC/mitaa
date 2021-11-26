const { Router } = require('express')
const fuzzysort = require('fuzzysort')

// resource
const resource = require('../content/districts.json')
const regions = require('../content/regions.json')

const router = Router()

router.get('/', (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json(resource)
  }

  const targets = fuzzysort.go(search, resource, {
    keys: ['districtName']
  })

  const results = targets.map(({ obj }) => ({ ...obj, region: regions.find(({ id }) => id === obj.region) }))
  return res.json(results)
})
router.post('/', (req, res) => {
  res.json(resource)
})

module.exports = router

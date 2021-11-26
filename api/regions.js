const { Router } = require('express')
const fuzzysort = require('fuzzysort')

// resource
const resource = require('../content/regions.json')
const countries = require('../content/countries.json')

const router = Router()

router.get('/', (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json(resource)
  }

  // find similarity by keys
  const targets = fuzzysort.go(search, resource, {
    keys: ['regionName']
  })

  // attach country data to filtered regions
  const results = targets.map(({ obj }) => ({ ...obj, country: countries.find(({ id }) => id === obj.country) }))
  return res.json(results)
})
router.post('/', (req, res) => {
  res.json(resource)
})

module.exports = router

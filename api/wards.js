const { Router } = require('express')
const fuzzysort = require('fuzzysort')

// resource
const resource = require('../content/wards.json')
const districts = require('../content/districts.json')

const router = Router()

router.get('/', (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json(resource)
  }

  // find similarity by keys
  const targets = fuzzysort.go(search, resource, {
    keys: ['wardName']
  })

  // attach district data to filtered wards
  const results = targets.map(({ obj }) => ({ ...obj, district: districts.find(({ id }) => id === obj.district) }))
  return res.json(results)
})
router.post('/', (req, res) => {
  res.json(resource)
})

module.exports = router

const { Router } = require('express')
const fuzzysort = require('fuzzysort')

// resource
const resource = require('../content/regions.json')

const router = Router()

router.get('/', (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json(resource)
  }

  const targets = fuzzysort.go(search, resource, {
    keys: ['regionName']
  })

  const results = targets.map(({ obj }) => obj)
  return res.json(results)
})
router.post('/', (req, res) => {
  res.json(resource)
})

module.exports = router

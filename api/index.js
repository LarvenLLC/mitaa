const express = require('express')
const app = express()

const countries = require('./countries')
app.use('/countries', countries)

const regions = require('./regions')
app.use('/regions', regions)

const districts = require('./districts')
app.use('/districts', districts)

const wards = require('./wards')
app.use('/wards', wards)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app

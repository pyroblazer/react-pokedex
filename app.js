const express = require('express')
const process = require('process')

const app = express()

// Set a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_, res) => {
  res.send('ok')
})

app.get('/version', (_, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})



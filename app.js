const express = require('express')
const app = express()
const api = require('./api.js')

api.run(app)
app.listen(3000, () => console.log('NewsAPI listening on port 3000'))
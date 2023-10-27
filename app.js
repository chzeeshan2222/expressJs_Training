const express = require('express')
const app = express()
const people = require('./router')

app.use(express.json())
app.use('/api/people', people)


app.listen(8000, () => {
  console.log('Server is listening on port 8000....')
})

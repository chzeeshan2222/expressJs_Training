// two ways to import the express
//const express = require('express')();
const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res)=>{
    res.send('about page')
})
app.all('*',(req,res)=>{
    res.set('content-type', 'text/html');

res.status(404).send("<h1>Page not found</h1>")
})
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
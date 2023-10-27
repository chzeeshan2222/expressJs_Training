const express = require('express')
const app = express()
const logger = require('./logger')
const auth = require('./auth')
//  req => middleware => res

// app.use(logger)
// app.get('/user/:id', (req, res, next) => {
//     console.log('ID:', req.params.id)
//     next()
//   }, (req, res, next) => {
//     res.send('User Info')
//   })
//parse from data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
  app.post('/login', (req, res) => {
const {name,email}=req.body;
    res.status(200).send(`welcome ${name} your gmail is ${email}`)
 
  })
  // handler for the /user/:id path, which prints the user ID
//   app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id)
//   })
// //
// //multiple middlewares function  are use in a array
// app.use([logger,auth])
// app.get('/',  (req, res) => {
//   res.send('Home')
// })
// app.get('/about',(req, res) => {
//   res.send('About')
// })

app.listen(8000, () => {
  console.log('Server is listening on port 8000....')
})

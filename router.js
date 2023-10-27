const express = require('express')
const router = express.Router()
const {createAccount,getPeople,editPeople,deletePeople}=require('./controller')

// router.post('/',createAccount)

// router.get('/',getPeople)

// router.put('/editPeople/:id',editPeople)

// router.delete('/deletePeople/:id',deletePeople)
router.route('/').get(getPeople).post(createAccount)

module.exports=router;
const express = require('express')
const router = express.Router()

//neu request la: /admin/register
router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',(req,res)=>{
    const name = req.body.txtName
    const role = req.body.Role
    const pass= req.body.txtPassword

    const objectToInsert = {
        userName: name,
        role:role,
        password: pass
    }
    //goi ham insert: bang Users, new user trong objectToInsert
    insertObject("Users",objectToInsert)
    res.render('adminIndex')
})

module.exports = router;
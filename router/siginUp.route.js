const express = require('express')
const route = express.Router()
const user = require('../models/user.model')
const bcrypt = require('bcrypt');

route.get('/signUp', (req, res) => {
    res.render('signUp')
})

route.post('/signUp', async (req, res) => {
    const salt = await bcrypt.genSalt();
    
    const {
        userName,
        firstName,
        lastName,
        email,
        password
    } = req.body

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)
    const data = await user.create({
        userName,
        firstName,
        lastName,
        email,
        password:hashedPassword
    })

    console.log(data.toJSON())
    res.send({
        'msg': "okkkkkkkkk"
    })
})


module.exports = route
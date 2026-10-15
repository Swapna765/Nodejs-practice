const express = require('express')
const app = express()

const userModel = require('./userModel.js')

app.get('/', (req, res) =>{
    res.send("Hii")
})

app.get('/create', async (req, res) =>{
    let createduser = await userModel.create({
        name: "Swapna",
        username: "swapna",
        email: "swapna@gmail.com",
    })

    res.send(createduser)
})

app.listen(3000)
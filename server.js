const express = require('express')
const app = express()
const path = require('path')
const api = require('./server/routes/api')
// const City = require('./server/model/City')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherDB', {useNewUrlParser: true})

app.use('/', api)

const port = 3200
app.listen(port, ()=> {
    console.log(`Server running on ${port}`)
})
const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = require(`urllib`)

const City = require('../model/City')

const apiKey = "197cf43e7d01659ab1e8742f02fcaaa4"

router.get('/city/:cityName', function(req, res){
    const {cityName} = req.params

    url.request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    function (err,cityData){
        const data = JSON.parse(cityData)
        res.send(data)
    })
})



module.exports = router
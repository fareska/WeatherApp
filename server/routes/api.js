const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = require(`urllib`)
require('dotenv').config()

const City = require('../model/City')

const apiKey = process.env.API_KEY
console.log(apiKey)
router.get('/city/:cityName', function (req, res) {
  const { cityName } = req.params

  url.request(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    function (err, cityData) {
      //axios.get didn't work for me ????????????????????????
      const data = JSON.parse(cityData)
      res.send(data)
    }
  )
})

router.get('/cities', function (req, res) {
  City.find({}, (err, data) => {
    res.send(data)
  })
})

router.post('/city', function (req, res) {
  const newCity = new City(req.body)
  newCity
    .save()
    .then((newCity) => {
      res.send(newCity)
    })
    .catch((err) => res.send(err))
})

router.delete('/city/:cityId', async (req, res) => {
  const { cityId } = req.params

  console.log(cityId)
  const city = await City.findByIdAndDelete(cityId)
  res.send(city)
})

module.exports = router
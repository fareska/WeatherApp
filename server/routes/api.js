const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = require(`urllib`)

const City = require('../model/City')

const apiKey = '197cf43e7d01659ab1e8742f02fcaaa4'

//This route should take a cityName parameter and return the city data in a response.
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

//This route should find all of the city data saved in your DB, and send it to the client
router.get('/cities', function (req, res) {
  City.find({}, (err, data) => {
    res.send(data)
  })
})

//This route should save a new City to your DB
router.post('/city', function (req, res) {
  const newCity = new City(req.body)
  newCity
    .save()
    .then((newCity) => {
      res.send(newCity)
    })
    .catch((err) => res.send(err))
})

//This route should take a cityName parameter and delete the correct city from your DB
router.delete('/city/:cityId', async (req, res) => {
  const { cityId } = req.params
//   const cityId = req.params.cityId

  console.log(cityId)
  const city = await City.findByIdAndDelete(cityId)
  res.send(city)
})

module.exports = router

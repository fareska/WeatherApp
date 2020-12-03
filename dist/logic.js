class WeatherManager {
  constructor() {
    this.cityData = []
  }

  async getDataFromDB () {
    const cities = await $.get('/cities') 
      this.cityData.push(...cities)
  }

  async getCityData(cityName) {
    const cityData = await $.get(`city/${cityName}`)
    let cityObj = {
      name: cityData.name,
      temperature: cityData.main.temp,
      condition: cityData.weather[0].description,
      conditionPic: ` http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
    }
    this.cityData.push(cityObj)
    console.log(this.cityData)
  }

  async saveCity(cityObj) {
    const savedCity = await $.post(`/city`, cityObj)
    this.getDataFromDB()
  }

  removeCity(cityId) {
    $.ajax({
      method: 'DELETE',
      url: `/city/${cityId}`,
      success: () => {
        this.cityData.splice(0)
        this.getDataFromDB()
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  getData = () => {
    this.data
  }

}


//getDataFromDB
//getCityData
//saveCity
//removeCity
//getData


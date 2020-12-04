class WeatherManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
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
            isSaved: false
        }
        return (cityObj)
    }

    async saveCity(cityObj) {
        cityObj.isSaved = true
        const savedCity = await $.post(`/city`, cityObj)
        this.cityData.push(savedCity)
    }

    removeCity(cityId) {
        $.ajax({
            method: 'DELETE',
            url: `/city/${cityId}`,
            success: () => {
                for (let i in this.cityData){
                    if(this.cityData[i]._id === cityId){
                        this.cityData.splice(i, 1)
                    }
                }
            },
            error: (err) => { console.log(err)},
        })
    }

    getData = () => this.cityData

    // getData = () => {
    //     this.data
    // }
}

// const m = new WeatherManager
// m.getCityData('tel aviv')
// m.saveCity({
//     condition: "clear sky",
//     conditionPic: " http://openweathermap.org/img/wn/01n@2x.png",
//     name: "Tel Aviv",
//     temperature: 21.3
// })

//getDataFromDB
//getCityData
//saveCity
//removeCity
//getData

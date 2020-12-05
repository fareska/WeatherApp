class WeatherManager {
    constructor() {
        this.cityData = []
    }

    fixer = function(myStr) {
        const upperCase = myStr.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
        return (upperCase)
    }
    
    async getDataFromDB() {
        const cities = await $.get('/cities')
        this.cityData.push(...cities)
        return this.cityData
    }

    async getCityData(cityName) {
            if (this.cityData.some(c => c.name === this.fixer(cityName))){
               return this.cityData// console.log('you already got it')
            }else{
                const cityData = await $.get(`city/${cityName}`)
                    let cityObj = {
                        name: cityData.name,
                        temperature: cityData.main.temp,
                        condition: cityData.weather[0].description,
                        conditionPic: ` http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
                        isSaved: false        
                    }
                    this.cityData.push(cityObj)
                    return this.cityData 
            }
    }          

    async saveCity(cityName) {
        for (let i in this.cityData){
            if(this.cityData[i].name === cityName){
                this.cityData[i].isSaved = true 
                const savedCity = await $.post(`/city`, this.cityData[i])
                this.cityData.splice(i, 1, savedCity)
                return this.cityData
            }
        }
    }

    async removeCity(cityId) {
        await $.ajax({
            method: 'DELETE',
            url: `/city/${cityId}`,
            success: () => {
                for (let i in this.cityData){
                    if(this.cityData[i]._id === cityId){
                        this.cityData.splice(i, 1)
                    }
                } 
            } 
        })
        return this.cityData
    }
}
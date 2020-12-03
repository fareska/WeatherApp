
class WeatherManager {
    constructor(){
        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities/tel aviv', (res)=> {
            
        //{
            // data.name 
            // data.main.temp
            // data.weather.description
        // }
            this.cityData.push(res)
        })

        // $.ajax({
        //     method: "GET",
        //     url: '/cities',
        //     success: (data)=> {
        //         cityData.push(data)
        //         console.log(data)
        //     },
        //     error: (err) => {console.log(err)}
        // })
    }
} 

const m = new WeatherManager 
m.getDataFromDB()
console.log(m.cityData)

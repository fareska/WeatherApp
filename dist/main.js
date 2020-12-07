const manager = new WeatherManager
const renderer = new Renderer

const loadPage = async function(){
    const dataArr = await manager.getDataFromDB()
    renderer.loadCities(dataArr)  //manager.getData()
}
loadPage()


const searchCity = async function(){
    let cityName = $("#input").val()
    $("#input").val("")

    const citiesArr = await manager.getCityData(cityName)
    renderer.loadCities(citiesArr)
}


$('#citiesContainer').on('click', 'i', async function(){
            if($(this).closest('div').attr('class') === "false"){
                let cityName = $(this).closest('.city').find('.name').text()
                const citiesArr = await manager.saveCity(cityName)
                renderer.loadCities(citiesArr)
            }
})


$('#citiesContainer').on('click', 'i',async function(){
            if($(this).closest('div').attr('class') === "true"){
                let cityId = $(this).closest('.city').attr('id')
                const citiesArr = await manager.removeCity(cityId)                
                renderer.loadCities(citiesArr)
            }
        })
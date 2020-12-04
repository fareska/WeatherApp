
const manager = new WeatherManager
const renderer = new Renderer

const loadPage = async function(){
    const data = await manager.getDataFromDB()
    renderer.loadCities(manager.getData())
}
loadPage()




const searchCity = async function(){
    let cityName = $("#input").val()
    $("#input").val("")

    const newCity = await manager.getCityData(cityName)
    renderer.loadNewCity(newCity)
}




$('#citiesContainer').on('click',".add" ,async function() {
        let cityObj = {
            name:$(this).closest('.not-saved').find('.name').text(),
            temperature:$(this).closest('.not-saved').find('.temperature').text(),
            condition:$(this).closest('.not-saved').find('.condition').text(),
            conditionPic:$(this).closest('.not-saved').find('.conditionPic').attr('src')
        
        const newCity = await manager.saveCity(cityObj)
        // renderer.loadCities(manager.getData())
        console.log('34')
    }
    else{
        let cityId = $(this).closest('.saved').attr('id')
        const deletedCity = await manager.removeCity(cityId)}
        console.log(deletedCity)
        renderer.loadCities(manager.getData)
        console.log('after render')
})
// $('#citiesContainer').on('click',"i" ,async function() {
//     if($(this).closest('.not-saved').find('.name').text()!== ""){
//         let cityObj = {
//             name:$(this).closest('.not-saved').find('.name').text(),
//             temperature:$(this).closest('.not-saved').find('.temperature').text(),
//             condition:$(this).closest('.not-saved').find('.condition').text(),
//             conditionPic:$(this).closest('.not-saved').find('.conditionPic').attr('src')
//         }
//         const newCity = await manager.saveCity(cityObj)
//         // renderer.loadCities(manager.getData())
//         console.log('34')
//     }
//     else{
//         let cityId = $(this).closest('.saved').attr('id')
//         const deletedCity = await manager.removeCity(cityId)}
//         console.log(deletedCity)
//         renderer.loadCities(manager.getData)
//         console.log('after render')
// })
////////// i tried to add onclick attr in the element but the above didn't work for me..
// isn't possible to add attr onclick? (how if yes) 
///// what the different between text() and innerHtml? and innerSomething ? 





















// const updateVisited = function(wonder){
//     $.ajax({
//         url: `wonder/${wonder}`,
//         method: "PUT",
//         success: function(res){
//             console.log("PUT Complete")
//             fetch()
//         }
//     })
// }

// $.ajax({
//     url: '/wonder/Colosseum',
//     method: "DELETE",
//     success: function () { }
// })

// $("#wonders").on("click", ".visit", function(){
//     let wonder = $(this).closest(".wonder").find(".name").text().split(" -", 1)[0].trim()
//     updateVisited(wonder)
//     //PUT this to the server: update the wonder's `visited` status to `true`
// })


// fetch() //load the data on page load
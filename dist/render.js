class Renderer {
    constructor() {}
    loadCities(citiesArr) {
        const source = $('#cities-template').html()
        const template = Handlebars.compile(source)

        const newHtml = template({ city: citiesArr })
        $('#citiesContainer').empty().append(newHtml)
    }

    loadNewCity(cityObj){
        const source = $('#newCity-template').html()
        const template = Handlebars.compile(source)

        const newHtml = template(cityObj)
        $('#citiesContainer').append(newHtml)  //.find(`#${cityObj.id}`).empty()
    }
}

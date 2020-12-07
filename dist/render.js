class Renderer {
    constructor() {}
    loadCities(citiesArr) {
        const source = $('#cities-template').html()
        const template = Handlebars.compile(source)

        const newHtml = template({ city: citiesArr })
        $('#citiesContainer').empty().append(newHtml)
    }
}

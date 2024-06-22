
//214cac2d07da56b916103a011a97a31a
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=214cac2d07da56b916103a011a97a31a"

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var button = document.getElementById("search-button")

        button.addEventListener('click', () => {
            var textInput = document.getElementById("search-location")
            cityName = textInput.value
            cityName = capitalizeInput(cityName)
            apiUrlNew = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=214cac2d07da56b916103a011a97a31a"
            fetch(apiUrlNew)
                .then(response => response.json())
                .then(data => {
                    var temperature = Math.round(kelvinToCelsius(data.main.temp)) + "°"
                    var minTemperature = Math.round(kelvinToCelsius(data.main.temp_min)) + "°"
                    var maxTemperature = Math.round(kelvinToCelsius(data.main.temp_max)) + "°"

                    document.getElementById("temperature").innerHTML = temperature
                    document.getElementById("city-name").innerHTML = cityName
                    document.getElementById("min-temp").innerHTML = minTemperature
                    document.getElementById("max-temp").innerHTML = maxTemperature
                    console.log(data)
                })
            textInput.value = ""
        })

    })

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15
}

function capitalizeInput(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

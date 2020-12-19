// variables that will be needed  
var lon = ""
var lat = ""
var apiKey = "348a03864c53988b715b0daea933a0ef"
uvIndexEl = $("#uvAPI")
var cityStorage = window.localstorage
var cityList = []
//fahrenheitCal = (x - 273.15) * 9 / 5 +32
//API information


//submit button & AJAX CALLs
$("#submitBtn").on("click", function(event) {
    event.preventDefault()
   
    var city = $("#citySearch").val()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#cityAPI").text(JSON.stringify(response.name))
        $("#tempAPI").text(JSON.stringify((~~response.main.temp - 273) * 9 / 5 + 32))
        $("#humiAPI").text(JSON.stringify(response.main.humidity))
        $("#windAPI").text(JSON.stringify(response.wind.speed))
        console.log(response)
        lon = response.coord.lon
        lat = response.coord.lat
        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey,
          method: "GET"
        }).then(function(uvIndex) {
          var uvValue = uvIndex.value
          uvIndexEl.text(JSON.stringify(uvValue))

          if (uvIndex.value <= 2) {
            uvIndexEl.css("background-color", "lightgreen")
          }else if (uvValue >=3 && uvValue <= 5 ) {
            uvIndexEl.css("background-color", "yellow")
          }else if (uvValue >=6 && uvValue <=8) {
            uvIndexEl.css("background-color", "orange")
          }else if (uvValue <8) {
            uvIndexEl.css("backgorund-color", "red")
          }

        })
      });

      var query5URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey

      $.ajax({
          url: query5URL,
          method: "GET"
      }).then(function(response5) {
        console.log(response5.list)
        $("#date1").text(JSON.stringify(response5.list[0].dt_txt))
        $("#temp1").text(JSON.stringify((~~response5.list[0].main.temp - 273) * 9 / 5 + 32))
        $("#humi1").text(JSON.stringify(response5.list[0].main.humidity))
        $("icon1").append(JSON.stringify(response5.list[0].weather[0].icon))

        $("#date2").text(JSON.stringify(response5.list[32].dt_txt))
        $("#temp2").text(JSON.stringify((~~response5.list[32].main.temp - 273) * 9 / 5 + 32))
        $("#humi2").text(JSON.stringify(response5.list[32].main.humidity))
        $("icon2").append(JSON.stringify(response5.list[32].weather[0].icon))

        $("#date3").text(JSON.stringify(response5.list[24].dt_txt))
        $("#temp3").text(JSON.stringify((~~response5.list[24].main.temp - 273) * 9 / 5 + 32))
        $("#humi3").text(JSON.stringify(response5.list[24].main.humidity))
        $("icon3").append(JSON.stringify(response5.list[24].weather[0].icon))

        $("#date4").text(JSON.stringify(response5.list[16].dt_txt))
        $("#temp4").text(JSON.stringify((~~response5.list[16].main.temp - 273) * 9 / 5 + 32))
        $("#humi4").text(JSON.stringify(response5.list[16].main.humidity))
        $("icon4").append(JSON.stringify(response5.list[16].weather[0].icon))

        $("#date5").text(JSON.stringify(response5.list[8].dt_txt))
        $("#temp5").text(JSON.stringify((~~response5.list[8].main.temp - 273) * 9 / 5 + 32))
        $("#humi5").text(JSON.stringify(response5.list[8].main.humidity))
        $("icon5").append(JSON.stringify(response5.list[8].weather[0].icon))
      })
})
function localSearch() {
  if (cityStorage.getItem("pastWeatherCities") != undefined) {
    cityList = JSON.parse(cityStorage.getItem("pastWeatherCities"))
    for (var i = 0; i < cityList.length; i++) {
      var recentCity = $("<li>")
      recentCity.text(cityList[i])
      recentCity.attr("data-city", cityList[i])
      $("#prevCity").preprend(recentCity)

      cityList.push($("#citysearch").val())
    }
  }
}
localSearch()

function savePastSearches() {
  cityStorage.setItem("pastWeatherCities", JSON.stringify(cityList))
}

savePastSearches
// functions to link to page
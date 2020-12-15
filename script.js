// variables that will be needed
var fahrenheitCal = 273.15 * 9 / 5 + 32

//API information



//submit button & AJAX CALLs
$("#submitBtn").on("click", function(event) {
    event.preventDefault()
   
    var city = $("#citySearch").val()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=348a03864c53988b715b0daea933a0ef";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#cityAPI").text(JSON.stringify(response.name))
        $("#tempAPI").text(JSON.stringify(response.main.temp))
        $("#humiAPI").text(JSON.stringify(response.main.humidity))
        $("#windAPI").text(JSON.stringify(response.wind.speed))
      });

      var query5URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=348a03864c53988b715b0daea933a0ef"

      $.ajax({
          url: query5URL,
          method: "GET"
      }).then(function(response5) {
        console.log(response5.list[0])
        $("#temp1").text(JSON.stringify(response5.list[0].main.temp))
        $("#humi1").text(JSON.stringify(response5.list[0].main.humidity))
        $("icon1").text(JSON.stringify(response5.list[0].weather[0].icon))
      })
})
// functions to link to page
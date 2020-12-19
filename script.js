// variables that will be needed  
//fahrenheitCal = (x - 273.15) * 9 / 5 +32
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
        $("#tempAPI").text(JSON.stringify((response.main.temp - 273) * 9 / 5 + 32))
        $("#humiAPI").text(JSON.stringify(response.main.humidity))
        $("#windAPI").text(JSON.stringify(response.wind.speed))
        console.log(response.main.temp)
      });

      var query5URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=348a03864c53988b715b0daea933a0ef"

      $.ajax({
          url: query5URL,
          method: "GET"
      }).then(function(response5) {
        console.log(response5.list)
        $("#date1").text(JSON.stringify(response5.list[0].dt_txt))
        $("#temp1").text(JSON.stringify((~~response5.list[0].main.temp - 273) * 9 / 5 + 32))
        $("#humi1").text(JSON.stringify(response5.list[0].main.humidity))
        $("icon1").append(JSON.stringify(response5.list[0].weather[0].icon))

        $("#temp2").text(JSON.stringify((~~response5.list[1].main.temp - 273) * 9 / 5 + 32))
        $("#humi2").text(JSON.stringify(response5.list[1].main.humidity))
        $("icon2").append(JSON.stringify(response5.list[1].weather[0].icon))

        $("#temp3").text(JSON.stringify((~~response5.list[2].main.temp - 273) * 9 / 5 + 32))
        $("#humi3").text(JSON.stringify(response5.list[2].main.humidity))
        $("icon3").append(JSON.stringify(response5.list[2].weather[0].icon))

        $("#temp4").text(JSON.stringify((~~response5.list[3].main.temp - 273) * 9 / 5 + 32))
        $("#humi4").text(JSON.stringify(response5.list[3].main.humidity))
        $("icon4").append(JSON.stringify(response5.list[3].weather[0].icon))

        $("#temp5").text(JSON.stringify((~~response5.list[4].main.temp - 273) * 9 / 5 + 32))
        $("#humi5").text(JSON.stringify(response5.list[4].main.humidity))
        $("icon5").append(JSON.stringify(response5.list[4].weather[0].icon))
      })
})
// functions to link to page
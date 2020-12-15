// variables that will be needed
var fahrenheitCal = 273.15 * 9 / 5 + 32

//API information



//submit button & AJAX CALLs
$("#submitBtn").on("click", function(event) {
    event.preventDefault()
   
    var city = $("#citySearch").val()
    console.log(city)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=348a03864c53988b715b0daea933a0ef";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.name)
        $("#cityAPI").text(JSON.stringify(response.name))
        $("#tempAPI").text(JSON.stringify(response.main.temp))
        $("#humiAPI").text(JSON.stringify(response.main.humidity))
        $("#windAPI").text(JSON.stringify(response.wind.speed))
      });

})
// functions to link to page
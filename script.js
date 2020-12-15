// variables that will be needed


//API information



//submit button & AJAX CALL
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
      });

})
// functions to link to page
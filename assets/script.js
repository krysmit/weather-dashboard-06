var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []
// var $searchInput = $("#searchInput").val();
var apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";


//Function to save to local storage
$("#search-style").click(function (event){
    event.preventDefault()
    let searchInput = $("#searchInput").val();
    console.log("local storage search input: ", searchInput);
    var checkArray = searchHistory.includes(searchInput);

    if (checkArray === false) {
        searchHistory.push(searchInput);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//adding searched items to a list
    } else {
        searchHistory.push(searchInput);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
        var historyButton = $("<a>").attr({
          class: "list-group-item list-group-item-action",
          href: "#",
        })
    
    historyButton.text(searchInput);
    $("#searchList").append(historyButton);

    currentWeather(searchInput);
    searchButtonHandler(searchInput);

    }});


//calling API for current weather
function currentWeather(searchInput) {
    console.log("current weather search input: ", searchInput);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey+"&units=imperial";
     console.log("current weather api url: ", weatherURL)
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            console.log("current weather data: ",data);
            // var appendedDates = [];
            var appendHTML = "";
            
                appendHTML += `<div class="card btn-primary">
                <h2>${searchInput}</h2>
                <h3>Temp:${data.main.temp}
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h3>
                <h4>Description: ${data.weather[0].description}</h4>
                <h5>Humidity: ${data.main.humidity}</h5>
                <h6>Wind Speed: ${data.wind.speed}</h6>
                                `

                //console.log("current weather date: ", currDate)
            

            $("#weatherNow").html(appendHTML)
        
    })   
}

//calling API for forecast
function searchButtonHandler(searchInput) {
    console.log("forecast search input: ", searchInput);
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey+"&units=imperial";
     console.log("forecast api url: ", weatherURL)
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            console.log("forecast data: ", data);
            // var appendedDates = [];
            var appendHTML = 0;

            for (let i=0; i < data.list.length; i=i+8) {
                var curr = data.list[i]
                var currDateText = curr.dt_txt
                var currDate = currDateText.split(" ")[0];
                appendHTML += `<div class="card btn-primary">
                <h2>${currDate}</h2>
                <h3>Temp:${curr.main.temp}
                <img src="https://openweathermap.org/img/wn/${curr.weather[0].icon}@2x.png" /></h3>
                <h4>Description: ${curr.weather[0].description}</h4>
                <h5>Humidity: ${curr.main.humidity}</h5>
                <h6>Wind Speed: ${curr.wind.speed}</h6>

                                `

                console.log("current date: ", currDate)
            }

            $("#fiveday").html(appendHTML)
        
    })   
}
console.log("hello I'm linked!");
var $searchButton = $("#search-style");
var $searchInput = $("#searchInput").val();
var apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";

//panels to display information
function getPanelHTML(date, temp) {
    return `
        <div class="col-sm-4">
            <div class="panel panel-default">
            <div class="panel-heading">${date}</div>
                <div class="panel-body">
                    <p>Temperature: ${temp}</p>
                </div>
            </div>
        </div>
    `
}

//Function to save to local storage
$("search-style").click(function (){
    $searchInput = $("#searchInput").val();
    var checkArray = searchHistory.inclues($searchInput);

    if (checkArray == true) {
        return;
    } else {
        searchHistory.push($searchInput);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
//need to write in code to list out history items below search area
}});



//When the search button is clicked - API ajax
function searchButtonHandler(e) {
    e.preventDefault();
    var searchInput = $searchInput;
    console.log(searchInput);
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid" + apiKey;

    $.ajax({
        //get data from api
        url: weatherURL,
        succes: function (data) {
            console.log(data);
            var appendedDates = [];
            var appendCount = 0;

            for (let i=0; i < 5; i++) {
                var curr = data.list[i]
                var currDateTexSt = curr.dt_txt
                var currDate = currDateText.split(" ")[0];

                console.log(currDate)
            }

            $("#myWeather").append(
                getPanelHTML(date, temp)
            )
        }
    })   
}

$searchButton.click(searchButtonHandler);
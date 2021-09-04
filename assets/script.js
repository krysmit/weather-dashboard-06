/*let $searchButton = $("search-style");
let $searchInput = $("btn-style");

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

//When the search button is clicked - ajax call
function searchButtonHandler() {
    let searchInput = $searchInput.val();
    searchInput = "chicago"

    let apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";
    let weatherURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901` + city + "&APPID" + apiKey;

    $.ajax({
        //get data from api
        url:weatherURL,
        succes: function (data) {

            let appendedDates = [];
            let appendCount = 0;

            for (let i=0; i < data.list.length; i++) {
                let curr = data.list[i]
                let currDateText = curr.dt_txt
                let currDate = currDateText.split(" ")[0];

                console.log(currDate)


            }

            $("#myWeather").append(
                getPanelHTML(date, temp)
            )
        }
    })    
}

$searchButton.click(searchButtonHandler);
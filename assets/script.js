let $searchButton = $("search-style");
let $searchInput = $("btn-style")

function searchButtonHandler() {
    let searchInput = $searchInput.val();
    searchInput = "chicago"

    let apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";
    let weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={}'

    $.ajax({
        url:weatherURL,
        succes: function (data) {

            let appendedDates = [];

            for (let i=0; i < data.list.length; i++) {
                let curr = data.list[i]
                let currDateText = curr.dt_txt
                let currDate = currDateText.split(" ")[0];

                console.log(currDate)
            }

            $("#myWeather").append(
                getPanelHTML("chicago", "10")
            )
        }
    })    
}

$searchButton.click(searchButtonHandler);
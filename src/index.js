import "./styles.css";
import { add } from './math.js';
console.log('Result:', add(5, 6));

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=us&key=L7L27578GUK7YMFD4SANGWWQ9&contentType=json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(`Address is ${data.address}`)
//         console.log(`Today is ${data.currentConditions.conditions}`)
//     })
//     .catch(error => console.error(error))

const weatherForm = document.querySelector('.weatherForm')
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "L7L27578GUK7YMFD4SANGWWQ9";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData)
        }
        catch(error){
            console.error(error)
            displayError(error)
        }
    }
    else {
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}
`;
    const response = await fetch(apiUrl)

    if(!response.ok){
        throw new Error("404: Not Found");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
    }

    console.log(data)

    const {resolvedAddress: city,
           days: [{datetime, conditions, temp, tempmax, tempmin, uvindex, windspeed, feelslike, pressure, humidity, sunrise, sunset}, secondDay, thirdDay, forthDay, fifthDay, sixthDay, seventhDay, eigthDay]} = data;
    card.textContent = "";
    card.style.display = "flex";
    
    // Containers for display data
    const cityTitleRow = document.createElement('div');
    cityTitleRow.classList.add('cityTitleRow');
    const mainConditionsRow = document.createElement('div');
    mainConditionsRow.classList.add('mainConditionsRow');
    const tempsBlock = document.createElement('div');
    tempsBlock.classList.add('tempsBlock')
    const highLowRow = document.createElement('div');
    highLowRow.classList.add('highLowRow');
    const minorConditionsRow = document.createElement('div');
    minorConditionsRow.classList.add('minorConditionsRow');
    const minorBoxWind = document.createElement('div');
    minorBoxWind.classList.add('minorBox');
    const minorBoxHumidity = document.createElement('div');
    minorBoxHumidity.classList.add('minorBox');
    const minorBoxUvindex = document.createElement('div');
    minorBoxUvindex.classList.add('minorBox');
    const minorBoxPressure = document.createElement('div');
    minorBoxPressure.classList.add('minorBox');
    // Display elements
    const cityDisplay = document.createElement('h1');
    const conditionsDisplay = document.createElement('p');
    const tempDisplay = document.createElement('p');
    tempDisplay.classList.add('tempDisplay')
    const feelsLikeDisplay = document.createElement('p');
    const tempmaxDisplay = document.createElement('p');
    const tempminDisplay = document.createElement('p');
    const iconPng = document.createElement('p');
    const uvindexDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const pressureDisplay = document.createElement('p');
    const sunriseDisplay = document.createElement('p');
    const sunsetDisplay = document.createElement('p');
    const windspeedDisplay = document.createElement('p');
    // textContent for Display elements
    let cityCapitilized = casing(city)
    cityDisplay.textContent = cityCapitilized;
    conditionsDisplay.textContent = conditions;
    feelsLikeDisplay.textContent = feelslike;
    tempmaxDisplay.textContent = `H:${tempmax}°F`;
    tempminDisplay.textContent = `H:${tempmin}°F`;
    uvindexDisplay.textContent = uvindex;
    humidityDisplay.textContent = humidity;
    pressureDisplay.textContent = pressure;
    sunriseDisplay.textContent = sunrise;
    sunsetDisplay.textContent = sunset;
    windspeedDisplay.textContent = windspeed;
    // Minor box wind
    const minorBoxWindDiv = document.createElement('div')
    const windIcon = document.createElement("i")
    windIcon.classList.add('fa-solid', 'fa-wind')
    windIcon.style.color = '#9da9b7';
    minorBoxWind.appendChild(minorBoxWindDiv)
    minorBoxWindDiv.appendChild(windIcon)
    const windTitle = document.createElement('h1')
    minorBoxWindDiv.appendChild(windTitle)
    windTitle.textContent = "Wind"
    minorBoxWind.appendChild(windspeedDisplay)
    // Minor box humidity
    const minorBoxHumidityDiv = document.createElement('div')
    const humidityIcon = document.createElement("i")
    humidityIcon.classList.add('fa-solid', 'fa-droplet')
    humidityIcon.style.color = '#9da9b7';
    minorBoxHumidity.appendChild(minorBoxHumidityDiv)
    minorBoxHumidityDiv.appendChild(humidityIcon)
    const humidityTitle = document.createElement('h1')
    minorBoxHumidityDiv.appendChild(humidityTitle)
    humidityTitle.textContent = "Humidity"
    minorBoxHumidity.appendChild(humidityDisplay)
    // Minor box unindex
    const minorBoxUvindexDiv = document.createElement('div')
    const uvindexIcon = document.createElement("i")
    uvindexIcon.classList.add('fa-solid', 'fa-droplet')
    uvindexIcon.style.color = '#9da9b7';
    minorBoxUvindex.appendChild(minorBoxUvindexDiv)
    minorBoxUvindexDiv.appendChild(uvindexIcon)
    const uvindexTitle = document.createElement('h1')
    minorBoxUvindexDiv.appendChild(uvindexTitle)
    uvindexTitle.textContent = "uvindex"
    minorBoxUvindex.appendChild(uvindexDisplay)
    // Minor box pressure
    const minorBoxPressureDiv = document.createElement('div')
    const pressureIcon = document.createElement("i")
    pressureIcon.classList.add('fa-solid', 'fa-droplet')
    pressureIcon.style.color = '#9da9b7';
    minorBoxPressure.appendChild(minorBoxPressureDiv)
    minorBoxPressureDiv.appendChild(pressureIcon)
    const pressureTitle = document.createElement('h1')
    minorBoxPressureDiv.appendChild(pressureTitle)
    pressureTitle.textContent = "pressure"
    minorBoxPressure.appendChild(pressureDisplay)

    tempDisplay.textContent = `${temp}°F`;
    cityDisplay.classList.add("cityDisplay")
    // Appending containers with display elements
    // Appending card element
    card.appendChild(cityTitleRow)
    cityTitleRow.appendChild(cityDisplay)
    card.appendChild(mainConditionsRow)
    card.appendChild(minorConditionsRow)
    // Appending mainConditionsRow
    mainConditionsRow.appendChild(tempsBlock)
    tempsBlock.appendChild(tempDisplay)
    tempsBlock.appendChild(conditionsDisplay)
    tempsBlock.appendChild(highLowRow)
    highLowRow.appendChild(tempminDisplay)
    highLowRow.appendChild(tempmaxDisplay)
    // Appending minorConditionsRow
    minorConditionsRow.appendChild(minorBoxWind)
    minorConditionsRow.appendChild(minorBoxHumidity)
    minorConditionsRow.appendChild(minorBoxUvindex)
    minorConditionsRow.appendChild(minorBoxPressure)

    // Forecast row
    const forecastTitle = document.createElement('p')
    forecastTitle.classList.add('forecastTitle')
    forecastTitle.textContent = "7-Day Forecast"
    card.appendChild(forecastTitle)

    const weekForecastRow = document.createElement('div')
    weekForecastRow.classList.add('weekForecastRow')
    card.appendChild(weekForecastRow)

    // Weekly forecast
    const firstDayBox = document.createElement('div')
    firstDayBox.classList.add('dayBox')
    const firstDay = getDayOfWeek(datetime)
    const firstDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(firstDayBox)
    firstDayBoxWeekday.textContent = "Today";
    const firstDayHigh = document.createElement('p')
    firstDayHigh.textContent = tempmax
    const firstDayLow = document.createElement('p')
    firstDayLow.textContent = tempmin
    firstDayBox.append(firstDayBoxWeekday, firstDayHigh, firstDayLow)

    const secondDayBox = document.createElement('div')
    secondDayBox.classList.add('dayBox')
    const secondDayOfTheWeek = getDayOfWeek(secondDay.datetime)
    const secondDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(secondDayBox)
    secondDayBoxWeekday.textContent = secondDayOfTheWeek;
    const secondDayHigh = document.createElement('p')
    secondDayHigh.textContent = secondDay.tempmax
    const secondDayLow = document.createElement('p')
    secondDayLow.textContent = secondDay.tempmin
    secondDayBox.append(secondDayBoxWeekday, secondDayHigh, secondDayLow)

    const thirdDayBox = document.createElement('div')
    thirdDayBox.classList.add('dayBox')
    const thirdDayOfTheWeek = getDayOfWeek(thirdDay.datetime)
    const thirdDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(thirdDayBox)
    thirdDayBoxWeekday.textContent = thirdDayOfTheWeek;
    const thirdDayHigh = document.createElement('p')
    thirdDayHigh.textContent = thirdDay.tempmax
    const thirdDayLow = document.createElement('p')
    thirdDayLow.textContent = thirdDay.tempmin
    thirdDayBox.append(thirdDayBoxWeekday, thirdDayHigh, thirdDayLow)

    const forthDayBox = document.createElement('div')
    forthDayBox.classList.add('dayBox')
    const forthDayOfTheWeek = getDayOfWeek(forthDay.datetime)
    const forthDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(forthDayBox)
    forthDayBoxWeekday.textContent = forthDayOfTheWeek;
    const forthDayHigh = document.createElement('p')
    forthDayHigh.textContent = forthDay.tempmax
    const forthDayLow = document.createElement('p')
    forthDayLow.textContent = forthDay.tempmin
    forthDayBox.append(forthDayBoxWeekday, forthDayHigh, forthDayLow)

    const fifthDayBox = document.createElement('div')
    fifthDayBox.classList.add('dayBox')
    const fifthDayOfTheWeek = getDayOfWeek(fifthDay.datetime)
    const fifthDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(fifthDayBox)
    fifthDayBoxWeekday.textContent = fifthDayOfTheWeek;
    const fifthDayHigh = document.createElement('p')
    fifthDayHigh.textContent = fifthDay.tempmax
    const fifthDayLow = document.createElement('p')
    fifthDayLow.textContent = fifthDay.tempmin
    fifthDayBox.append(fifthDayBoxWeekday, fifthDayHigh, fifthDayLow)

    const sixthDayBox = document.createElement('div')
    sixthDayBox.classList.add('dayBox')
    const sixthDayOfTheWeek = getDayOfWeek(sixthDay.datetime)
    const sixthDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(sixthDayBox)
    sixthDayBoxWeekday.textContent = sixthDayOfTheWeek;
    const sixthDayHigh = document.createElement('p')
    sixthDayHigh.textContent = sixthDay.tempmax
    const sixthDayLow = document.createElement('p')
    sixthDayLow.textContent = sixthDay.tempmin
    sixthDayBox.append(sixthDayBoxWeekday, sixthDayHigh, sixthDayLow)

    const seventhDayBox = document.createElement('div')
    seventhDayBox.classList.add('dayBox')
    const seventhDayOfTheWeek = getDayOfWeek(seventhDay.datetime)
    const seventhDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(seventhDayBox)
    seventhDayBoxWeekday.textContent = seventhDayOfTheWeek;
    const seventhDayHigh = document.createElement('p')
    seventhDayHigh.textContent = seventhDay.tempmax
    const seventhDayLow = document.createElement('p')
    seventhDayLow.textContent = seventhDay.tempmin
    seventhDayBox.append(seventhDayBoxWeekday, seventhDayHigh, seventhDayLow)

    const eigthDayBox = document.createElement('div')
    eigthDayBox.classList.add('dayBox')
    const eigthDayOfTheWeek = getDayOfWeek(eigthDay.datetime)
    const eigthDayBoxWeekday = document.createElement('p')
    weekForecastRow.appendChild(eigthDayBox)
    eigthDayBoxWeekday.textContent = eigthDayOfTheWeek;
    const eigthDayHigh = document.createElement('p')
    eigthDayHigh.textContent = eigthDay.tempmax
    const eigthDayLow = document.createElement('p')
    eigthDayLow.textContent = eigthDay.tempmin
    eigthDayBox.append(eigthDayBoxWeekday, eigthDayHigh, eigthDayLow)
    // card.appendChild(feelsLikeDisplay)
    // card.appendChild(sunriseDisplay)
    // card.appendChild(sunsetDisplay)

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

function casing(cityName) {
    let upperCaseCityName = "";
    var cityArr = cityName.split(" ");

    for (var i = 0; i < cityArr.length; i++){
        upperCaseCityName += cityArr[i].charAt(0).toUpperCase() + cityArr[i].slice(1) + " ";
    }
    return upperCaseCityName;
}
// async function fetchData(){

//     try {
//         const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=us&key=L7L27578GUK7YMFD4SANGWWQ9&contentType=json")

//         if(!response.ok){
//             throw new Error("Could not fetch resourse");
//         }
//         const data = await response.json();
//             console.log(data)

//         const address = data.address
//         console.log(address)
        
//         const conditions = data.currentConditions.conditions
//         console.log(conditions)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// fetchData()
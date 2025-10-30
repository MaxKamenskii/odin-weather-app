import "./styles.css";

import clearDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/clear-day.svg";
const clearDayImage = document.createElement('img')
clearDayImage.src = clearDay
clearDayImage.setAttribute("class", "clearDayImage")

import clearNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/clear-night.svg";
const clearNightImage = document.createElement('img')
clearNightImage.src = clearNight
clearNightImage.setAttribute("class", "clearNightImage")

import cloudy from "../assets/WeatherIcons-main/SVG/1st Set - Color/cloudy.svg";
const cloudyImage = document.createElement('img')
cloudyImage.src = cloudy
cloudyImage.setAttribute("class", "cloudyImage")

import fog from "../assets/WeatherIcons-main/SVG/1st Set - Color/fog.svg";
const fogImage = document.createElement('img')
fogImage.src = fog
fogImage.setAttribute("class", "fogImage")

import hail from "../assets/WeatherIcons-main/SVG/1st Set - Color/hail.svg";
const hailImage = document.createElement('img')
hailImage.src = hail
hailImage.setAttribute("class", "hailImage")

import partlyCloudyDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/partly-cloudy-day.svg";
const partlyCloudyDayImage = document.createElement('img')
partlyCloudyDayImage.src = partlyCloudyDay
partlyCloudyDayImage.setAttribute("class", "partlyCloudyDayImage")

import partlyCloudyNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/partly-cloudy-night.svg";
const partlyCloudyNightImage = document.createElement('img')
partlyCloudyNightImage.src = partlyCloudyNight
partlyCloudyNightImage.setAttribute("class", "partlyCloudyNightImage")

import rainSnowShowersDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/rain-snow-showers-day.svg";
const rainSnowShowersDayImage = document.createElement('img')
rainSnowShowersDayImage.src = rainSnowShowersDay
rainSnowShowersDayImage.setAttribute("class", "rainSnowShowersDayImage")

import rainSnowShowersNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/rain-snow-showers-night.svg";
const rainSnowShowersNightImage = document.createElement('img')
rainSnowShowersNightImage.src = rainSnowShowersNight
rainSnowShowersNightImage.setAttribute("class", "rainSnowShowersNightImage")

import rainSnow from "../assets/WeatherIcons-main/SVG/1st Set - Color/rain-snow.svg";
const rainSnowImage = document.createElement('img')
rainSnowImage.src = rainSnow
rainSnowImage.setAttribute("class", "rainSnowImage")

import rain from "../assets/WeatherIcons-main/SVG/1st Set - Color/rain.svg";
const rainImage = document.createElement('img')
rainImage.src = rain
rainImage.setAttribute("class", "rainImage")

import showersDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/showers-day.svg";
const showersDayImage = document.createElement('img')
showersDayImage.src = showersDay
showersDayImage.setAttribute("class", "showersDayImage")

import showersNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/showers-night.svg";
const showersNightImage = document.createElement('img')
showersNightImage.src = showersNight
showersNightImage.setAttribute("class", "showersNightImage")

import sleet from "../assets/WeatherIcons-main/SVG/1st Set - Color/sleet.svg";
const sleetImage = document.createElement('img')
sleetImage.src = sleet
sleetImage.setAttribute("class", "sleetImage")

import snowShowersDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/snow-showers-day.svg";
const snowShowersDayImage = document.createElement('img')
snowShowersDayImage.src = snowShowersDay
snowShowersDayImage.setAttribute("class", "snowShowersDayImage")

import snowShowersNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/snow-showers-night.svg";
const snowShowersNightImage = document.createElement('img')
snowShowersNightImage.src = snowShowersNight
snowShowersNightImage.setAttribute("class", "snowShowersNightImage")

import snow from "../assets/WeatherIcons-main/SVG/1st Set - Color/snow.svg";
const snowImage = document.createElement('img')
snowImage.src = snow
snowImage.setAttribute("class", "snowImage")

import thunderRain from "../assets/WeatherIcons-main/SVG/1st Set - Color/thunder-rain.svg";
const thunderRainImage = document.createElement('img')
thunderRainImage.src = thunderRain
thunderRainImage.setAttribute("class", "thunderRainImage")

import thunderShowersDay from "../assets/WeatherIcons-main/SVG/1st Set - Color/thunder-showers-day.svg";
const thunderShowersDayImage = document.createElement('img')
thunderShowersDayImage.src = thunderShowersDay
thunderShowersDayImage.setAttribute("class", "thunderShowersDayImage")

import thunderShowersNight from "../assets/WeatherIcons-main/SVG/1st Set - Color/thunder-showers-night.svg";
const thunderShowersNightImage = document.createElement('img')
thunderShowersNightImage.src = thunderShowersNight
thunderShowersNightImage.setAttribute("class", "thunderShowersNightImage")

import thunder from "../assets/WeatherIcons-main/SVG/1st Set - Color/thunder.svg";
const thunderImage = document.createElement('img')
thunderImage.src = thunder
thunderImage.setAttribute("class", "thunderImage")

import wind from "../assets/WeatherIcons-main/SVG/1st Set - Color/wind.svg";
const windImage = document.createElement('img')
windImage.src = wind
windImage.setAttribute("class", "windImage")


const weatherImages = {
    clearDayImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/clear-day.svg",
    clearNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/clear-night.svg",
    cloudyImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/cloudy.svg",
    fogImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/fog.svg",
    hailImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/hail.svg",
    partlyCloudyDayImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/partly-cloudy-day.svg",
    partlyCloudyNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/partly-cloudy-night.svg",
    rainSnowShowersDayImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/rain-snow-showers-day.svg",
    rainSnowShowersNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/rain-snow-showers-night.svg",
    rainSnowImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/rain-snow.svg",
    rainImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/rain.svg",
    showersDayImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/showers-day.svg",
    showersNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/showers-night.svg",
    sleetImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/sleet.svg",
    snowShowersDayImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/snow-showers-day.svg",
    snowShowersNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/snow-showers-night.svg",
    snowImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/snow.svg",
    thunderRainImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/thunder-rain.svg",
    thunderShowersNightImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/thunder-showers-night.svg",
    thunderImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/thunder.svg",
    windImage: "../assets/WeatherIcons-main/SVG/3rd Set - Color/wind.svg",
}
const weatherIcons = {
    clearDayImage: "clear-day",
    clearNightImage: "clear-night",
    cloudyImage: "cloudy",
    fogImage: "fog",
    hailImage: "hail",
    partlyCloudyDayImage: "partly-cloudy-day",
    partlyCloudyNightImage: "partly-cloudy-night",
    rainSnowShowersDay: "rain-snow-showers-day",
    rainSnowShowersNightImage: "rain-snow-showers-night",
    rainSnowImage: "rain-snow",
    rainImage: "rain",
    showersDayImage: "showers-day",
    showersNightImage: "showers-night",
    sleetImage: "sleet",
    snowShowerDayImage: "snow-showers-day",
    snowShowerNightImage: "snow-showers-night",
    snowImage: "snow",
    thunderRainImage: "thunder-rain",
    thunderShowersDay: "thunder-showers-day",
    thunderShowersNightImage: "thunder-showers-night",
    thunderImage: "thunder",
    windImage: "wind",
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
console.log(typeof(getKeyByValue(weatherIcons, "clear-day")))

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
           days: [{datetime, conditions, temp, tempmax, tempmin, uvindex, windspeed, feelslike, pressure, humidity, sunrise, sunset, icon}, secondDay, thirdDay, forthDay, fifthDay, sixthDay, seventhDay, eigthDay]} = data;
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
    mainConditionsRow.appendChild(iconPng)
    // console.log(`Icon is: ${icon}`)
    
    const iconString = icon
    const theKey = getKeyByValue(weatherIcons, icon)
    console.log(`The key is: ${theKey}`)
    const currentDaySVG = document.createElement('img')
    currentDaySVG.src = assignImageSrc(theKey)
    currentDaySVG.style.height = "120px"
    iconPng.appendChild(currentDaySVG)
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
    //1st day icon
    const firstDayIconContainer = document.createElement("div")
    const firstDaySVG = document.createElement('img')
    firstDaySVG.src = assignImageSrc(theKey)
    firstDaySVG.style.height = "20px"
    firstDayIconContainer.appendChild(firstDaySVG)

    firstDayBox.append(firstDayBoxWeekday, firstDayIconContainer, firstDayHigh, firstDayLow)

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
    //2nd day icon
    const secondDayIconContainer = document.createElement("div")
    const secondKey = getKeyByValue(weatherIcons, secondDay.icon)
    const secondDaySVG = document.createElement('img')
    secondDaySVG.src = assignImageSrc(secondKey)
    secondDaySVG.style.height = "20px"
    secondDayIconContainer.appendChild(secondDaySVG)
    secondDayBox.append(secondDayBoxWeekday, secondDayIconContainer, secondDayHigh, secondDayLow)

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
    //3rd day icon
    const thirdDayIconContainer = document.createElement("div")
    const thirdKey = getKeyByValue(weatherIcons, thirdDay.icon)
    const thirdDaySVG = document.createElement('img')
    thirdDaySVG.src = assignImageSrc(thirdKey)
    thirdDaySVG.style.height = "20px"
    thirdDayIconContainer.appendChild(thirdDaySVG)
    thirdDayBox.append(thirdDayBoxWeekday, thirdDayIconContainer, thirdDayHigh, thirdDayLow)

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
    const forthDayIconContainer = document.createElement("div")
    const forthKey = getKeyByValue(weatherIcons, forthDay.icon)
    const forthDaySVG = document.createElement('img')
    forthDaySVG.src = assignImageSrc(forthKey)
    forthDaySVG.style.height = "20px"
    forthDayIconContainer.appendChild(forthDaySVG)
    forthDayBox.append(forthDayBoxWeekday, forthDayIconContainer, forthDayHigh, forthDayLow)

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
    const fifthDayIconContainer = document.createElement("div")
    const fifthKey = getKeyByValue(weatherIcons, fifthDay.icon)
    const fifthDaySVG = document.createElement('img')
    fifthDaySVG.src = assignImageSrc(fifthKey)
    fifthDaySVG.style.height = "20px"
    fifthDayIconContainer.appendChild(fifthDaySVG)
    fifthDayBox.append(fifthDayBoxWeekday, fifthDayIconContainer, fifthDayHigh, fifthDayLow)

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
    const sixthDayIconContainer = document.createElement("div")
    const sixthKey = getKeyByValue(weatherIcons, sixthDay.icon)
    const sixthDaySVG = document.createElement('img')
    sixthDaySVG.src = assignImageSrc(sixthKey)
    sixthDaySVG.style.height = "20px"
    sixthDayIconContainer.appendChild(sixthDaySVG)
    sixthDayBox.append(sixthDayBoxWeekday, sixthDayIconContainer, sixthDayHigh, sixthDayLow)

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
    const seventhDayIconContainer = document.createElement("div")
    const seventhKey = getKeyByValue(weatherIcons, seventhDay.icon)
    const seventhDaySVG = document.createElement('img')
    seventhDaySVG.src = assignImageSrc(seventhKey)
    seventhDaySVG.style.height = "20px"
    seventhDayIconContainer.appendChild(seventhDaySVG)
    seventhDayBox.append(seventhDayBoxWeekday, seventhDayIconContainer, seventhDayHigh, seventhDayLow)

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
    const eigthDayIconContainer = document.createElement("div")
    const eigthKey = getKeyByValue(weatherIcons, eigthDay.icon)
    const eigthDaySVG = document.createElement('img')
    eigthDaySVG.src = assignImageSrc(eigthKey)
    eigthDaySVG.style.height = "20px"
    eigthDayIconContainer.appendChild(eigthDaySVG)
    eigthDayBox.append(eigthDayBoxWeekday, eigthDayIconContainer, eigthDayHigh, eigthDayLow)

}

function assignImageSrc(theKey){
    if (theKey === "clearDayImage") {
    return clearDay;
  } else if (theKey === "clearNightImage") {
    return clearNight;
  } else if (theKey === "cloudyImage") {
    return cloudy;
  } else if (theKey === "fogImage") {
    return fog;
  } else if (theKey === "hailImage") {
    return hail;
  } else if (theKey === "partlyCloudyDayImage") {
    return partlyCloudyDay;
  } else if (theKey === "partlyCloudyNightImage") {
    return partlyCloudyNight;
  } else if (theKey === "rainSnowShowersDay") {
    return rainSnowShowersDay;
  } else if (theKey === "rainSnowShowersNightImage") {
    return rainSnowShowersNight;
  } else if (theKey === "rainSnowImage") {
    return rainSnow;
  } else if (theKey === "rainImage") {
    return rain;
  } else if (theKey === "showersDayImage") {
    return showersDay;
  } else if (theKey === "showersNightImage") {
    return showersNight;
  } else if (theKey === "sleetImage") {
    return sleet;
  } else if (theKey === "snowShowerDayImage") {
    return snowShowerDay;
  } else if (theKey === "snowShowerNightImage") {
    return snowShowerNight;
  } else if (theKey === "snowImage") {
    return snow;
  } else if (theKey === "thunderRainImage") {
    return thunderRain;
  } else if (theKey === "thunderShowersDay") {
    return thunderShowersDay;
  } else if (theKey === "thunderShowersNightImage") {
    return thunderShowersNight;
  } else if (theKey === "thunderImage") {
    return thunder;
  } else if (theKey === "windImage") {
    return wind;
  }
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

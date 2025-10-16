

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
        const weatherData = await getWeatherData(city)
        displayWeatherInfo(weatherData)
    }
    else {
        console.error(error)
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}
`;
    const response = await fetch(apiUrl)

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    console.log(data)
    
}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
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
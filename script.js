

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=us&key=L7L27578GUK7YMFD4SANGWWQ9&contentType=json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(`Address is ${data.address}`)
//         console.log(`Today is ${data.currentConditions.conditions}`)
//     })
//     .catch(error => console.error(error))



async function fetchData(){

    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=us&key=L7L27578GUK7YMFD4SANGWWQ9&contentType=json")

        if(!response.ok){
            throw new Error("Could not fetch resourse");
        }
        const data = await response.json();
            console.log(data)

        const address = data.address
        console.log(address)
        
        const conditions = data.currentConditions.conditions
        console.log(conditions)
    }
    catch(error){
        console.log(error);
    }
}

fetchData()
// ACCESS THE BUTTON
const subBtn = document.querySelector("#subbtn");


// CREATE A EVENT LISTENER FOR THE BUTTON
subBtn.addEventListener("click", ()=> {
    const popuDiv = document.querySelector("#WeaherDets");
    // CREATE VARIABLE THAT HOLD API KEY
    const apiKey = "36f91ed9adb9efd1da557ed80c598123";
    const city = document.querySelector("#cityInputField").value;
    // CREATE VARIABLE THAT REQUESTS THE DATA FROM THE API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    // USE FETCH API TO GET THE DATA AND POPULATE THE DESIRED HTML ELEMENTS
    fetch(apiUrl)
        .then(response => response.json());
        .then((data)=>{
            const cityName = document.querySelector("#city-name");
            const temp = document.querySelector("#temp");
            const condition = document.querySelector("#condition");
            popuDiv.innerHTML = /*`
            Weather Condition: ${data.weather[0].main} <br>
            Weather description: ${data.weather[0].description} 
            `*/ 
            cityName.textContent = data.name;
            temp.textContent = (data.main.temp - 273.15).toFixed(2) + " °C";
            condition.textContent = data.weather[0].main

        }) 
        .catch((error)=> {
            popuDiv.textContent = "Error was found";
            console.log(error)
        })
})
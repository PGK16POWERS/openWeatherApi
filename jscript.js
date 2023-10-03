// ACCESS THE BUTTON
const subBtn = document.querySelector("#subbtn");


// CREATE A EVENT LISTENER FOR THE BUTTON
subBtn.addEventListener("click", ()=> {
    const popuDiv = document.querySelector("#WeaherDets");
    // CREATE VARIABLE THAT HOLD API KEY
    const apiKey = "YOUR_API_KEY";
    const city = document.querySelector("#cityInputField").value;
    // CREATE VARIABLE THAT REQUESTS THE DATA FROM THE API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    // USE FETCH API TO GET THE DATA AND POPULATE THE DESIRED HTML ELEMENTS
    fetch(apiUrl)
        .then(response => response.json())
        .then((data)=>{
            popuDiv.innerHTML = `
            City Name: ${data.name} <br>
            Temperature: ${data.main.temp} °C <br>
            Weather Condition: ${data.weather[0].main} <br>
            Weather description: ${data.weather[0].description} 
            `
        }) 
        .catch((error)=> {
            popuDiv.textContent = "Error was found";
            console.log(error)
        })
})
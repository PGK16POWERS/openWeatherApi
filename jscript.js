const subBtn = document.querySelector("#subbtn");

subBtn.addEventListener("click", ()=> {
    const popuDiv = document.querySelector("#WeaherDets");
    const apiKey = "36f91ed9adb9efd1da557ed80c598123";
    const city = document.querySelector("#cityInputField").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then((data)=>{
            popuDiv.innerHTML = `
            City Name: ${data.name} <br>
            Temperature: ${data.main.temp} °C<br>
            Weather Condition: ${data.weather[0].main} <br>
            Weather description: ${data.weather[0].description} 
            `
        }) 
        .catch((error)=> {
            popuDiv.textContent = "Error was found";
            console.log(error)
        })
})
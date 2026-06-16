 const apiKey = "0ee0d797b8814a23b4d80429261606";
    const apiUrl = "http://api.weatherapi.com/v1/current.json";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiUrl + `?key=` + apiKey + `&q=` + city);
    


  if(response.status == 400 || response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";


    const condition = data.current.condition.text.toLowerCase();

    if(condition.includes("cloud")){
      weatherIcon.src = "images/clouds.png";
    }
    else if(condition.includes("clear")){
      weatherIcon.src = "images/clear.png";
    }
    else if(condition.includes("rain")){
      weatherIcon.src = "images/rain.png";
    }
    else if(condition.includes("drizzle")){
      weatherIcon.src = "images/drizzle.png";
    }
    else if(condition.includes("mist")){
      weatherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

      searchBtn.addEventListener("click", ()=>{
        if (searchBox.value.trim() !== "") {
          checkWeather(searchBox.value);
        }
      });

  checkWeather(city);
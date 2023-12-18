const apiKey = "2106cb13c68c7cff2893841190cb0481";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid="+apiKey+"&units=metric&q=";
async function checkWeather(city){
    const response = await fetch(apiUrl+city);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        // console.log(data);
        // console.log("data");
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

        if(data.weather[0].main=="Clouds"){
            icon.src = "images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            icon.src = "images/clear.png";
        }else if(data.weather[0].main=="Rain"){
            icon.src = "images/rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            icon.src = "images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            icon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchbox.value);
});
searchbox.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        checkWeather(searchbox.value);
    }
})
//checkWeather();
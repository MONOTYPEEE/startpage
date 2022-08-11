let cityName = document.querySelector("#weather span:first-child");
let tempFeelLike = document.querySelector("#weather span:nth-child(2)");
let weatherDes = document.querySelector("#weather span:last-child");
                
function geolocationOK(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHERKEY}&units=metric&lang=kr`;
    fetch(weatherAPIurl)
        .then((response) => response.json())
        .then((data) => {
            cityName.innertText = data.name;
            tempFeelLike.innertText = data.main.feels_like;
            weatherDes.innertText = data.weather[0].description;
        });
}

function geolocationErrorReturn(){
    alert("날씨를 가져오는 중 오류가 발생했습니다.");
}

navigator.geolocation.getCurrentPosition(geolocationOK,geolocationErrorReturn);
const tempFeelLike = document.querySelector("#weather div:first-of-type");
const weatherDes = document.querySelector("#weather div:nth-of-type(2)");
const cityName = document.querySelector("#weather div:last-of-type");
const weatherIcon = document.querySelector("#weatherIcon");

function geolocationOK(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHERKEY}&units=metric&lang=kr`;
    fetch(weatherAPIurl)
        .then((response) => response.json())
        .then((data) => {
            cityName.innerText = data.name;
            tempFeelLike.innerText = `${Math.ceil(data.main.feels_like)}º`;
            weatherDes.innerText = data.weather[0].description;
            weatherIcon.style.backgroundImage = `url(./weatherIcon/${data.weather[0].icon}.svg)`;
        });
}

function geolocationErrorReturn(){
    alert("날씨를 가져오는 중 오류가 발생했습니다.");
}

navigator.geolocation.getCurrentPosition(geolocationOK,geolocationErrorReturn);

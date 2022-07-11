const clock = document.querySelector("h2#clock");
function refreshTime(){
    const day = new Date();
    const Hours = String(day.getHours()).padStart(2,"0");
    const Mints = String(day.getMinutes()).padStart(2,"0");
    const Second = String(day.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours} : ${Mints} : ${Second}`;
}
refreshTime();
setInterval(refreshTime, 1000);
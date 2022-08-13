const exchangeUrl = "https://api.manana.kr/exchange/rate.json?base=KRW&code=KRW,USD,JPY"

const USDwon = document.querySelector("#exchange span:first-child");
const JPYwon = document.querySelector("#exchange span:last-child");

fetch(exchangeUrl)        
    .then((response) => response.json())
    .then((data) => {
        USDwon.innerText = `USDKRW=X : ${data[1].rate}`;
        JPYwon.innerText = `JPYKRW=X : ${data[2].rate}`;
});

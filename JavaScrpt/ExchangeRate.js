const exchangeUrl = "https://api.manana.kr/exchange/rate.json?base=KRW&code=KRW,USD,JPY"

const USDwon = document.querySelector("#exchange div:first-of-type");
const JPYwon = document.querySelector("#exchange div:last-of-type");

fetch(exchangeUrl)        
    .then((response) => response.json())
    .then((data) => {
        USDwon.innerText = `${data[1].rate}원`;
        JPYwon.innerText = `${(data[2].rate).toFixed(2)}원`;
});

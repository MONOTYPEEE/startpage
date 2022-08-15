const exchangeUrl = "https://api.manana.kr/exchange/rate.json?base=KRW&code=KRW,USD,JPY"

const USDwon = document.querySelector("#exchange span:first-child");
const JPYwon = document.querySelector("#exchange span:last-child");

fetch(exchangeUrl)        
    .then((response) => response.json())
    .then((data) => {
        USDwon.innerText = `1미국 달러 : ${data[1].rate}원`;
        JPYwon.innerText = `1일본 엔 : ${(data[2].rate).toFixed(2)}원`;
});

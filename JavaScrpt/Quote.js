const quoteList = [
    {
        text: "갓 태어난 아기가 무슨 쓸모가 있겠습니까?",
        text_original: "What good is a new-born baby?",
        who:"마이클 패러데이",
        who_original:"Michael Faraday",
    },
    {
        text: "내가 멀리 볼 수 있었던 것은 거인의 어깨위에 있었기 때문이다.",
        text_original: "If I have seen further it is only by standing on the shoulders of giants.",
        who:"아이작 뉴턴",
        who_original:"Isaac Newton",
    },
    {
        text: "당신은 당신이 생각하는 대로 살아야 한다. 그러지 않으면 머지않아 당신은 사는 대로 생각하게 될 것이다.",
        text_original: "faut vivre comme on pense, sinon tôt ou tard on finit par penser comme on a vécu.",
        who:"폴 부르제",
        who_original:"Paul Bourget",
    },
    {
        text: "상상력은 지식보다 중요하다. 지식은 제한되어 있지만 상상력은 온 세상을 아우르고, 진보를 촉진하며, 진화의 시발점이 되기 때문이다.",
        text_original: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        who:"알베르트 아인슈타인",
        who_original:"Albert Einstein",
    },
    {
        text: "시간은 환상이다. 점심시간은 두배로 그렇다.",
        text_original: "Time is an illusion. Lunchtime doubly so.",
        who:"더글러스 애덤스",
        who_original:"Douglas Adams",
    },
    {
        text: "왔노라, 보았노라, 이겼노라.",
        text_original: "VENI, VIDI, VICI.",
        who:"율리우스 카이사르",
        who_original:"Gaius Julius Caesar",
    },
    {
        text: "자유는 공짜가 아니다.",
        text_original: "Freedom is not free.",
        who:"미국 속담",
        who_original:"",
    },
]
const quote = document.querySelector("#quote span:first-child");
const quoteOR = document.querySelector("#quote span:nth-of-type(2)");
const authorOR = document.querySelector("#quote span:nth-of-type(3)");
const author = document.querySelector("#quote span:last-of-type");

const RandQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
quote.innerText = RandQuote.text;
quoteOR.innerText = RandQuote.text_original;
author.innerText = RandQuote.who;
authorOR.innerText = RandQuote.who_original;


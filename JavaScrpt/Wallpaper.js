const wallpaperArray = [{
    fileName:"acrosstheverse_gwen.png",
    desc:"그웬 스테이시 (스파이더맨: 어크로스 더 스파이더버스)",
},
{
    fileName:"arcane.jpg",
    desc:"실코, 징크스, 바이 (아케인: 리그 오브 레전드)",
},
{
    fileName:"arcane_piltover.jpg",
    desc:"필드오버의 전경 (아케인: 리그 오브 레전드)",
},
{
    fileName:"arcane_zaun.jpg",
    desc:"자운의 전경 (아케인: 리그 오브 레전드)",
},
{
    fileName:"cruella.jpg",
    desc:"크루엘라 드 빌 (크루엘라)",
},
{
    fileName:"cruella_trio.jpg",
    desc:"호레이스, 에스텔라, 재스퍼 (크루엘라)",
},
{
    fileName:"newverse_gwen.jpg",
    desc:"그웬 스테이시 (스파이더맨: 뉴 유니버스)",
},
{
    fileName:"newverse_trio.jpg",
    desc:"피터 B. 파커, 마일스 모랄레스, 그웬 스테이시 (스파이더맨: 뉴 유니버스)",
},
{
    fileName:"nowayhome_peter.jpg",
    desc:"피터 파커 (스파이더 맨: 노 웨이 홈)",
},
{
    fileName:"nowayhome_peterstrange.jpg",
    desc:"피터 파커, 베네딕트 컴버배치 (스파이더 맨: 노 웨이 홈)",
},
{
    fileName:"nowayhome_trio.jpg",
    desc:"스파이더맨, 스파이더맨, 스파이더맨 (스파이더 맨: 노 웨이 홈)",
},
{
    fileName:"simpsons_movie.jpg",
    desc:"메기 심슨, 바트 심슨, 마지 심슨, 호머 심슨, 플로퍼 (심슨가족, 더 무비)",
},
];
const descSlot = document.querySelector("#movie span");
const chosenImage = wallpaperArray[Math.floor(Math.random() * wallpaperArray.length)];

descSlot.innerText = chosenImage.desc;
document.body.style.backgroundImage = `url(image/${chosenImage.fileName})`;
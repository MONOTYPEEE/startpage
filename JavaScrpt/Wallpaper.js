const wallpaperArray = [
    {
        fileName:"4theyouth.jpg",
        desc:"4 the Youth - JUSTHIS & Paloalto",
    },
    {
        fileName:"7_theEP.jpg",
        desc:"7 EP - Lil Nas X",
    },
    {
        fileName:"af.jpg",
        desc:"af - 우원재",
    },
    {
        fileName:"breathe3.jpg",
        desc:"살아숨셔 3 - 염따",
    },
    {
        fileName:"dawn_in_seoul.jpg",
        desc:"DAWN IN SEOUL - DON MALIK",
    },
    {
        fileName:"face_n_mask.jpg",
        desc:"Face & Mask - 키드밀리, dress",
    },
    {
        fileName:"indurstry_babi.jpg",
        desc:"INDURSTRY BABY - Lil Nas X, Jack Harlow",
    },
    {
        fileName:"malik_the_cactus_flower.jpg",
        desc:"선인장화 - DON MALIK",
    },
    {
        fileName:"NEXT_EPISODE.jpg",
        desc:"NEXT EPISODE - AKMU",
    },
    {
        fileName:"paid_in_seoul.jpg",
        desc:"PAID IN SEOUL - DON MALIK",
    },
    {
        fileName:"sungoes_down.jpg",
        desc:"SUN GOES DOWN - Lil Nas X",
    },
    {
        fileName:"x_the_worst.jpg",
        desc:"X - pH-1",
    },
    {
        fileName:"travel_noah.jpg",
        desc:"TRAVEL : NOAH - 김하온",
    },
    {
        fileName:"fadeaway.jpg",
        desc:"Fadeaway - Jvcki Wai, Coogie, Paloalto, The Quiett, 뱃사공",
    },
    
    ];

const descSlot = document.querySelector("#wallpaperDesc span");
const chosenImage = wallpaperArray[Math.floor(Math.random() * wallpaperArray.length)];

descSlot.innerText = chosenImage.desc;
document.body.style.backgroundImage = `url(image/${chosenImage.fileName})`;
const nameScr = document.querySelector("#GetName");
const nameInput = document.querySelector("#GetName input");
const greeting = document.querySelector("#greeting");

const HIDDENCLASS = "hidden";
const USERNAME_KEY = "username"


function onNameSubmit(event){
    event.preventDefault();
    nameScr.classList.add(HIDDENCLASS);
    const userName = nameInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    PrintGreeting(userName);
}

function PrintGreeting(username){
    if(username==="엄준식"){
        greeting.innerText=`엄준식이 어떻게 사람이름 ㅋㅋㅋ`;
    }else{
        greeting.innerText=`Hello ${username}`;
    }
    greeting.classList.remove(HIDDENCLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){   
    nameScr.addEventListener("submit", onNameSubmit);
    nameScr.classList.remove(HIDDENCLASS);
}
else{
    PrintGreeting(savedUserName);
}
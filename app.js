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
    greeting.innerText=`Hello ${username}`;
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
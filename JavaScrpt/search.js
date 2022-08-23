const naverButton = document.getElementById("#naver");
const googleButton = document.getElementById("#google");
const githubButton = document.getElementById("#github");

const searchBar = document.querySelector("#searchInput input");

function gotoNaver(){
   window.location = `https://search.naver.com/search.naver?&query=${searchBar.value}`;
}
function gotoGoogle(){
    window.location = `https://www.google.com/search?q=${searchBar.value}`;
}
function gotoGitHub(){
    window.location =`https://github.com/search?q=${searchBar.value}`;
}

//naverButton.addEventListener('click',gotoNaver);
//githubButton.addEventListener('click',gotoGitHub);
//googleButton.addEventListener('click',gotoGoogle);

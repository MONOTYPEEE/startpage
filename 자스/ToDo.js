const form = document.getElementById("ToDo-Form");
const list = document.getElementById("ToDo-List");
const input = form.querySelector("input");


function whenSubmitTodo(){
    event.preventDefault();
    const inputValue = input.value;
    input.value = "";
}

function printToDo(){
    
}

form.addEventListener("submit",whenSubmitTodo)
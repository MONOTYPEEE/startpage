const form = document.getElementById("ToDo-Form");
const list = document.getElementById("ToDo-List");
const input = form.querySelector("input");

function printToDo(inputValue){
    const listElement = document.createElement("li");
    const listSpanElement = document.createElement("span");
    listElement.appendChild(listSpanElement);
    listSpanElement.innerText=inputValue;
    list.appendChild(listElement);
}
function whenSubmitTodo(event){
    event.preventDefault();
    const inputValue = input.value;
    input.value = "";
    printToDo(inputValue);
}



form.addEventListener("submit",whenSubmitTodo)
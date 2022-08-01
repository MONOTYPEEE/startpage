const form = document.getElementById("ToDo-Form");
const TdList = document.getElementById("ToDo-List");
const TdInput = form.querySelector("#ToDo-Form input");

function RemoveTodo(event){
    const removeLi = event.target.parentElement;
    removeLi.remove();
}

function printToDo(inputTdV){
    const listElement = document.createElement("li");
    const SpanElement = document.createElement("span");
    const ButtonElement = document.createElement("button");
    ButtonElement.innerText = "X";
    ButtonElement.addEventListener("click",RemoveTodo);
    SpanElement.innerText=inputTdV;
    listElement.appendChild(SpanElement);
    listElement.appendChild(ButtonElement);
    TdList.appendChild(listElement);
}

function whenSubmitTodo(event){
    event.preventDefault();
    const inputValue = TdInput.value;
    TdInput.value = "";
    printToDo(inputValue);
}

form.addEventListener("submit",whenSubmitTodo)
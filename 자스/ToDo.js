const form = document.getElementById("ToDo-Form");
const TdList = document.getElementById("ToDo-List");
const TdInput = form.querySelector("#ToDo-Form input");

function RemoveTodo(){
    console.log("wow");
}

function printToDo(inputTdV){
    const listElement = document.createElement("li");
    const SpanElement = document.createElement("span");
    const ButtonElement = document.createElement("button");
    ButtonElement.innerText = "🙅‍♂️";
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
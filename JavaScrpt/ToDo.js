const form = document.getElementById("ToDo-Form");
const toDoList = document.getElementById("ToDo-List");
const toDoInput = form.querySelector("#ToDo-Form input");

let toDoStorage = [];
const TODOKEY = "ListToDo_LS";
const storedToDo = localStorage.getItem(TODOKEY);
const arrlyzed_storedToDo = JSON.parse(storedToDo);

function toDoSave(){
    localStorage.setItem(TODOKEY, JSON.stringify(toDoStorage));
}

function RemoveTodo(event){
    const removeLi = event.target.parentElement;
    removeLi.remove();
}

function printToDo(inputValue){
    const listElement = document.createElement("li");
    const SpanElement = document.createElement("span");
    const ButtonElement = document.createElement("button");
    ButtonElement.innerText = "X";
    ButtonElement.addEventListener("click",RemoveTodo);
    SpanElement.innerText=inputValue;
    listElement.appendChild(SpanElement);
    listElement.appendChild(ButtonElement);
    toDoList.appendChild(listElement);
}

function whenSubmitTodo(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    toDoStorage.push(inputValue);
    printToDo(inputValue);
    toDoSave();
}

form.addEventListener("submit",whenSubmitTodo);

if(storedToDo !== null){
    toDoStorage = arrlyzed_storedToDo;
    arrlyzed_storedToDo.forEach(printToDo);
}
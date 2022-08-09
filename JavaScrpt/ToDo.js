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

function removeTodo(event){
    const removeLi = event.target.parentElement;
    removeLi.remove();
    toDoStorage = toDoStorage.filter((todo) => todo.msid !== parseInt(removeLi.id));
    toDoSave();
}

function printToDo(inputValue){
    const listElement = document.createElement("li");
    listElement.id = inputValue.msid;
    const SpanElement = document.createElement("span");
    const ButtonElement = document.createElement("button");
    ButtonElement.innerText = "❌";
    ButtonElement.addEventListener("click",removeTodo);
    SpanElement.innerText = inputValue.text;
    listElement.appendChild(SpanElement);
    listElement.appendChild(ButtonElement);
    toDoList.appendChild(listElement);
}

function whenSubmitTodo(event){
    event.preventDefault();   
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:inputValue,
        msid: Date.now(),
    };
    toDoStorage.push(newToDoObj);
    printToDo(newToDoObj);
    toDoSave();
}

form.addEventListener("submit",whenSubmitTodo);


if(storedToDo !== null){
    toDoStorage = arrlyzed_storedToDo;
    arrlyzed_storedToDo.forEach(printToDo);
}
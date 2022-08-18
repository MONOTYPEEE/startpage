const form = document.getElementById("ToDo-Form");
const toDoList = document.getElementById("ToDo-List");
const toDoInput = form.querySelector("#ToDo-Form input");

let toDoStorage = []; //ToDo가 저장되는 Array입니다.

const TODOKEY = "ListToDo_LS"; //LocalStorage에 저장되는 ToDo값의 Key
const storedToDo = localStorage.getItem(TODOKEY); //LocalStorage에 저장되는 ToDo값의 내용
const arrlyzed_storedToDo = JSON.parse(storedToDo);

function saveToDo(){ //ToDo를 LocalStorage에 저장합니다
    localStorage.setItem(TODOKEY, JSON.stringify(toDoStorage));
}

function removeTodo(event){ //입력받은 ToDo를 삭제합니다
    const removeLi = event.target.parentElement; //삭제할 Html Element를 입력받은 const
    removeLi.remove();
    toDoStorage = toDoStorage.filter((todo) => todo.id !== parseInt(removeLi.id)); //removeLi를 제외한 Array를 다시 생성
    saveToDo(); //직전 라인에서 생성한 Array를 LocalStorage에 저장
}

function printToDo(inputValue){
    const listElement = document.createElement("li");
    listElement.id = inputValue.id;
    const ButtonElement = document.createElement("button");
    const SpanElement = document.createElement("span");
    ButtonElement.innerText = "삭제";
    ButtonElement.addEventListener("click",removeTodo);
    SpanElement.innerText = inputValue.text;
    //SpanElement.id = "toDoListTxt";
    listElement.appendChild(ButtonElement);
    listElement.appendChild(SpanElement);
    toDoList.appendChild(listElement);
}

function submitToDo(event){
    event.preventDefault();   
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:inputValue,
        id: Date.now(),
    };
    toDoStorage.push(newToDoObj);
    printToDo(newToDoObj);
    saveToDo();
}

form.addEventListener("submit",submitToDo);


if(storedToDo !== null){
    toDoStorage = arrlyzed_storedToDo;
    arrlyzed_storedToDo.forEach(printToDo);
}
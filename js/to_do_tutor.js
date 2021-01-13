//tutor's to-do App
let myForm = document.getElementById("form");
let input = document.getElementById("inputText");
let toDoList = document.getElementById("list");
let items = [];

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    createItem(input.value);
    items.push(input.value);
});

function createItem(task) {
  let doc = `<li class = "item">${task}<button id = "btn-del" onclick = "deleteItem(this)">Del</button></li>`;
  toDoList.insertAdjacentHTML("beforeend", doc);
  input.value = "";
}

function deleteItem(task){
    items.indexOf(task)
    task.parentElement.remove();
}

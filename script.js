let inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
let p = document.querySelector("p");

btnAdd.addEventListener("click", function () {
    if (inputTask.value.trim != 0) {
        let localItems = JSON.parse(localStorage.getItem("localItem"))

        if (localItems === null) {
            taskList = []
        } else {
            taskList = localItems
        }
        taskList.push(inputTask.value)
        localStorage.setItem("localItem",JSON.stringify(taskList))
    }
});


function showItem(){
    let localItems = JSON.parse(localStorage.getItem("localItem"))

    if(localItems === null){

    } else {
        taskList = localItems
    }

let html = ''
let  itemShow = document.querySelector(".todoList")
taskList.forEach((data, index) => {

    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">X</button>
    </div>
    `;
});
itemShow.inneerHTML = html;
}

function deleteItem(index){
let localItems = JSON.parse(localStorage.getItem('localItem'));
taskList.splice(index,1);
localStorage.setItem('localItem',JSON.stringify(taskList));
showItem();
}

function clearTask(){
    localStorage.clear();
    showItem();
}
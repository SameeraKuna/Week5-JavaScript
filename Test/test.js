let addBtn = document.getElementById("addBtn"); //addBtn has button element
let taskInput = document.getElementById("taskInput"); //taskInput has input element
let taskList = document.getElementById("taskList"); // taskList empty ul element

// To add a task
function addTask(){
    let text = taskInput.value.trim(); //trims the text starting and ending spaces
    if(text==="") return; //if entered nothing in input do nothing
    let li = document.createElement("li"); //to store each task added to a list item
    
    li.innerHTML = `
        <div class="task">
            <input type="checkbox" class="check">
            <span>${text}</span>
        </div>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;//for each list item it has a checkbox, text added, edit button and delete button
    taskList.prepend(li); //to add current list item to the ul at the start
    taskInput.value=""; //to set the task input value to empty
}
addBtn.addEventListener("click",addTask);

function dynamicTaskList(e){
    let li = e.target.closest("li"); //stores the current selected list item
    if(e.target.classList.contains("delete")){
        li.remove(); //to delete list item
    } 
    else if(e.target.classList.contains("edit")){
        let span = li.querySelector("span"); // span contains span element
        let newText = prompt("Edit task:", span.textContent); 
        if(newText!==null && newText.trim()!==""){
            span.textContent = newText;//to add edited text content
        }
    }
}
taskList.addEventListener("click",dynamicTaskList);
// To click
function toChecklist(e){
    if(e.target.classList.contains("check")){
        let li = e.target.closest("li");
        li.classList.toggle("completed");
    } //to mark a task completed
}
taskList.addEventListener("change", toChecklist);

// For filtering
let tasks = [];
let currentFilter = "All";
function filterCategory(cat){
    currentFilter = cat;
    displayTasks();
}
let filterButtons = document.getElementsByClassName("filterButtons").value;
function displayTasks(){
    let filtered = tasks.filter(function(t) {
      return currentFilter === "All" || t.filter-buttons === currentFilter;
    });
    filtered.forEach(function(task){

    })
}



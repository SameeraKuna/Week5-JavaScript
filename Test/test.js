let addBtn = document.getElementById("addBtn"); //addBtn has button element
let taskInput = document.getElementById("taskInput"); //taskInput has input element
let taskList = document.getElementById("taskList"); // taskList empty ul element

// To add a task
addBtn.addEventListener("click",addTask);
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

// Model for edit task
let editModal = document.getElementById("editModal");
let editInput = document.getElementById("editInput");
let saveEdit = document.getElementById("saveEdit");
let closeModal = document.getElementById("closeModal");

let currentSpan = null; // currentSpan is a variable used to store the <span> element of the task currently being edited.//
//null means it does not refer to any element yet (empty value).Initially:No task is selected for editing. Therefore currentSpan is set to null.

taskList.addEventListener("click",dynamicTaskList);
function dynamicTaskList(e){
    let li = e.target.closest("li");
    if(e.target.classList.contains("delete"))
        {li.remove();} 
    else if(e.target.classList.contains("edit"))
        {
        currentSpan = li.querySelector("span");//When we click Edit, the code stores the span of that task in currentSpan.CurrentSpan refers to task text being edited.
        editInput.value = currentSpan.textContent;
        editModal.style.display = "block"; // show modal
        }
}
//To save edited task in modal
    saveEdit.addEventListener("click", function() {
    let newText = editInput.value.trim();
    if(newText !== "")
        {currentSpan.textContent = newText;}
    editModal.style.display = "none"; // to hide modal
});

//To close modal
    closeModal.addEventListener("click", function(){
    editModal.style.display = "none";
});

// To lose modal when clicking outside the modal i.e, on webpage
window.addEventListener("click", function(e){
    if(e.target === editModal){
        editModal.style.display = "none";
    }
});
// To click
taskList.addEventListener("change", toChecklist);
function toChecklist(e){
    if(e.target.classList.contains("check")){
        let li = e.target.closest("li");
        li.classList.toggle("completed");
    } //to mark a task completed
}
taskList.addEventListener("change", toChecklist);





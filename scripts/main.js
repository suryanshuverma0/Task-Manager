var addTaskBtn = document.getElementById("add_task_btn");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("task-list");
addTaskBtn.addEventListener("click", function () {
    var taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
        var taskId = "task-".concat(Date.now()); // Generate a unique ID for each task
        var taskItem_1 = document.createElement("li");
        taskItem_1.textContent = taskDescription;
        // Add delete button with an ID and type
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        var deleteButtonId = "".concat(taskId, "-delete");
        deleteButton.id = deleteButtonId;
        deleteButton.type = "button";
        deleteButton.addEventListener("click", function () {
            taskItem_1.remove();
        });
        // Append task, edit button, and delete button to the list
        taskItem_1.appendChild(deleteButton);
        taskList.appendChild(taskItem_1);
        localStorage.setItem('taskList', taskDescription);
        var tasks = localStorage.getItem('taskList');
        console.log(tasks);
        taskInput.value = ""; // Clear the input field
    }
    else {
        alert("Please enter a task description.");
    }
});

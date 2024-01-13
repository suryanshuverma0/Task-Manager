const addTaskBtn = document.getElementById("add_task_btn") as HTMLButtonElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;

addTaskBtn.addEventListener("click", () => {
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== "") {
    const taskId = `task-${Date.now()}`; // Generate a unique ID for each task

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Add delete button with an ID and type
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const deleteButtonId = `${taskId}-delete`;
    deleteButton.id = deleteButtonId;
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Append task, edit button, and delete button to the list
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    localStorage.setItem('taskList', taskDescription);
    const tasks = localStorage.getItem('taskList');
    console.log(tasks);

    taskInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a task description.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskBoard = document.querySelector(".task-board");

  addTaskBtn.addEventListener("click", () => {
    const taskText = prompt("Enter a new task:");
    if (taskText && taskText.trim() !== "") {
      const taskItem = document.createElement("div");
      taskItem.className = "Task_Items";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const taskTitle = document.createElement("h");
      taskTitle.textContent = taskText;

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskTitle);

      // Insert new task before the Add Task button
      taskBoard.insertBefore(taskItem, addTaskBtn);
    }
  });

  // Optional: You can mark items as completed
  taskBoard.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const task = e.target.parentElement;
      if (e.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.opacity = 0.6;
      } else {
        task.style.textDecoration = "none";
        task.style.opacity = 1;
      }
    }
  });
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const now = new Date();
  const dateTimeString = now.toLocaleString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = taskText;

  const dateSpan = document.createElement("div");
  dateSpan.className = "datetime";
  dateSpan.textContent = `Added on: ${dateTimeString}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  li.appendChild(dateSpan);

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

/* ============================================================
   Simple To-Do List - script.js
   In-memory task management with array-based rendering.
   ============================================================ */

// --- State -----------------------------------------------------
// All tasks live in this array only. Nothing is persisted.
let tasks = [];
let nextId = 1;

// --- DOM references --------------------------------------------
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const emptyState = document.getElementById("emptyState");
const status = document.getElementById("status");

// --- Helpers ---------------------------------------------------
// Show a short status message. isError toggles the error color.
function setStatus(message, isError) {
  status.textContent = message;
  status.classList.toggle("is-error", Boolean(isError));
}

// Update the task counter text.
function updateCounter() {
  const count = tasks.length;
  counter.textContent = count === 1 ? "1 task" : count + " tasks";
}

// Re-render the entire task list from the tasks array.
function renderTasks() {
  // Clear existing items safely (no innerHTML with user data).
  taskList.textContent = "";

  // Build one <li> per task using safe DOM methods.
  tasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "task-item";
    item.dataset.id = String(task.id);

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text; // textContent prevents HTML injection
    item.appendChild(text);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "task-delete";
    deleteButton.dataset.id = String(task.id);
    deleteButton.setAttribute("aria-label", "Delete task: " + task.text);
    deleteButton.textContent = "Delete";
    item.appendChild(deleteButton);

    taskList.appendChild(item);
  });

  // Toggle empty state visibility.
  emptyState.hidden = tasks.length !== 0;

  updateCounter();
}

// Add a new task after validating and trimming the input.
function addTask() {
  const text = taskInput.value.trim();

  // Reject empty or whitespace-only input.
  if (text === "") {
    setStatus("Please enter a task before adding.", true);
    taskInput.focus();
    return;
  }

  // Store the trimmed task with a unique id.
  tasks.push({ id: nextId++, text: text });

  // Reset input and feedback.
  taskInput.value = "";
  setStatus("Task added.");
  renderTasks();
  taskInput.focus();
}

// Remove a task by id, animating the item out first.
function removeTask(id) {
  const item = taskList.querySelector('li[data-id="' + id + '"]');

  // Fallback if the element is not found.
  if (!item) {
    tasks = tasks.filter(function (task) {
      return task.id !== id;
    });
    renderTasks();
    setStatus("Task removed.");
    return;
  }

  // Avoid double-handling the same removal.
  if (item.classList.contains("is-removing")) return;
  item.classList.add("is-removing");

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    // Remove only the matching task from the array.
    tasks = tasks.filter(function (task) {
      return task.id !== id;
    });
    renderTasks();
    setStatus("Task removed.");
  }

  // Finish after the CSS transition, with a timeout fallback.
  item.addEventListener("transitionend", finish, { once: true });
  window.setTimeout(finish, 260);
}

// --- Event listeners -------------------------------------------
// Form submit covers both the button click and Enter key.
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

// Single click listener on the list handles all delete buttons (event delegation).
taskList.addEventListener("click", function (event) {
  const button = event.target.closest(".task-delete");
  if (!button) return;
  const id = Number(button.dataset.id);
  removeTask(id);
});

// --- Init ------------------------------------------------------
renderTasks();
taskInput.focus();

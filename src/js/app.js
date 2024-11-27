import Tasks from "./components/tasks";

document.addEventListener("DOMContentLoaded", () => {
  const tasks = new Tasks();
  window.tasks = tasks;
  tasks.input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      tasks.addTask();
    }
  });
  tasks.input.addEventListener("input", tasks.onFilter);
});


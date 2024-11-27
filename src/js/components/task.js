export default class Task {
  constructor(text, tasks) {
    this.tasks = tasks;
    this.text = text;
    this.pinned = 0;
    this.renderTask();
  }

  renderTask() {
    this.divTask = document.createElement("div");
    this.divTask.classList.add("task");
    this.divTask.textContent = this.text;
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.checkbox.classList.add("checkbox");
    this.checkbox.addEventListener("change", (e) => {
      this.tasks.result.textContent = '';
      this.pinned = this.checkbox.checked ? 1 : 0;
      this.tasks.renderPinnedTasks(tasks.tasksArray.filter((task) => task.pinned === 1));
      this.tasks.onFilter();
    });
    this.divTask.appendChild(this.checkbox);
  }
}

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/task.js
class Task {
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
    this.checkbox.addEventListener("change", () => {
      this.tasks.result.textContent = "";
      this.pinned = this.checkbox.checked ? 1 : 0;
      this.tasks.renderPinnedTasks(this.tasks.tasksArray.filter(task => task.pinned === 1));
      this.tasks.onFilter();
    });
    this.divTask.appendChild(this.checkbox);
  }
}
;// CONCATENATED MODULE: ./src/js/components/tasks.js

class Tasks {
  constructor() {
    this.tasksArray = [];
    this.input = document.querySelector(".input");
    this.result = document.querySelector(".result");
    this.tasks = document.querySelector(".tasks");
    this.ptasks = document.querySelector(".pinnedtasks");
    this.timeout = false;
    this.onFilter = this.onFilter.bind(this);
    this.noContent = document.createElement("div");
    this.noContent.textContent = "No tasks found";
    this.noPinnedContent = document.createElement("div");
    this.noPinnedContent.textContent = "No pinned tasks";
    this.tasks.appendChild(this.noContent);
    this.ptasks.appendChild(this.noPinnedContent);
  }
  addTask() {
    if (this.input.value !== "") {
      this.result.textContent = "";
      const task = new Task(this.input.value.trim(), this);
      this.tasksArray.push(task);
      this.input.value = "";
      this.result.textContent = "Задача добавлена";
      this.renderTasks(this.tasksArray.filter(task => task.pinned === 0));
    } else {
      this.result.textContent = "Ошибка ввода задачи";
    }
  }
  onFilter() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.filterHandler(this.input.value), 300);
  }
  filterHandler(text) {
    this.renderTasks(this.tasksArray.filter(task => {
      return task.pinned === 0 && task.text.toLowerCase().includes(text.trim().toLowerCase());
    }));
  }
  renderTasks(tasksForRender) {
    this.tasks.textContent = "";
    if (tasksForRender.length !== 0) {
      tasksForRender.map(task => this.tasks.appendChild(task.divTask));
    } else {
      this.tasks.appendChild(this.noContent);
    }
  }
  renderPinnedTasks(tasksForRender) {
    this.ptasks.textContent = "";
    if (tasksForRender.length !== 0) {
      tasksForRender.map(task => this.ptasks.appendChild(task.divTask));
    } else {
      this.ptasks.appendChild(this.noPinnedContent);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const tasks = new Tasks();
  window.tasks = tasks;
  tasks.input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      tasks.addTask();
    }
  });
  tasks.input.addEventListener("input", tasks.onFilter);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map
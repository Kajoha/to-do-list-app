import AddTask from './task.js';
import saveLocal from './storage.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const taskListUl = document.querySelector('ul');
const value = document.querySelectorAll('.dropdown__option--element');
let taskList = [];
let counterId = 1;
let optionSelect = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const initailTime = event.timeStamp;
  const task = new AddTask(counterId++, input.value, initailTime, optionSelect);
  taskList.push(task);
  task.addTaskDOM();

  localStorage.setItem('tasks', JSON.stringify(taskList));
  input.value = '';
});

function data(e) {
  const _value = e.target.dataset.value;
  optionSelect = _value;
}

value.forEach((option) => option.addEventListener('click', data));

function status() {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].complete === false) {
      taskList[i].complete = true;
      const ready = taskList[i];
    }
  }
}

taskListUl.addEventListener('click', (event) => {
  const complete = event.target.checked;
  const check = complete;
  status(check);
});

saveLocal();

function filterSelected(e) {
  console.log(e.target.value);
}

const filterTaks = document.querySelectorAll('.filter_btn');

filterTaks.forEach((option) => option.addEventListener('click', filterSelected));

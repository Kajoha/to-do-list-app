import AddTask from './task.js';
import saveLocal from './storage.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const taskListUl = document.querySelector('ul');
const value = document.querySelectorAll('.dropdown__option--element');
let taskList = [];
let counterId = 0;
let optionSelect = '';

function count(id) {
  return id + taskList.length;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const initailTime = event.timeStamp;
  // const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000;
  // console.log(getSecondsDiff);
  const taskId = count(counterId);
  const task = new AddTask(taskId, input.value, initailTime, optionSelect);
  task.addTaskDOM();
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

export {
  taskList
}
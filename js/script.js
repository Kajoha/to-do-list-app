import AddTask from './task.js';
import saveLocal from './storage.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const select = document.querySelector('select');
const taskListUl = document.querySelector('ul');
const taskList = [];
let counterId = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const initailTime = event.timeStamp;
  const task = new AddTask(counterId++, input.value, select.value, initailTime);
  taskList.push(task);
  task.addTaskDOM();
  // guarda en el local storage
  localStorage.setItem('tasks', JSON.stringify(taskList));
  input.value = '';
});

function status() {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].complete === false) {
      taskList[i].complete = true;
      const ready = taskList[i];
      console.log(ready)
    }
  }
}

taskListUl.addEventListener('click', (event) => {
  const complete = event.target.checked;
  const check = complete;
  status(check);
});

saveLocal();
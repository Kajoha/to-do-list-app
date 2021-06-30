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
  const t = Math.floor(initailTime) / 1000;
  
  const timeFormat = timeSince(new Date(Date.now()-t));
  console.log(timeFormat)

  const taskId = count(counterId);
  const task = new AddTask(taskId, input.value, timeFormat, optionSelect);
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

function timeSince(time) {
  
  let initialTime = new Date();
  let timeSeconds = (initialTime.getTime() - time.getTime()) / 1000;

  const initialMinute = '0 minute ago';
  const perMinute = `${Math.floor(timeSeconds/60)} minute ago`;
  const perHour = `${Math.floor(timeSeconds/3600)} hours ago`;
  const perDay = `${Math.floor(timeSeconds/86400)} days ago`;

  if(timeSeconds < 60) {
    return initialMinute;

  } else if(timeSeconds < 3600) {
    return perMinute;

  } else if(timeSeconds <= 86400) {
    return perHour;
    
  } else if(timeSeconds > 86400) {
    return perDay;
  }
}


export {
  taskList
}
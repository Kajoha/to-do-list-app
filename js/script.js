/* eslint-disable import/extensions */

import AddTask from './task.js';
import saveLocal from './storage.js';
import { selectDisplay, optionSelected } from './dropDown.js';

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.js-modal__open');
const closeModal = document.querySelector('.js-modal__close');

const dropdownSelect = document.querySelector('.dropdown__select');

const value = document.querySelectorAll('.dropdown__option--element');
let optionSelect = '';

const form = document.querySelector('form');
const input = document.querySelector('input');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

dropdownSelect.addEventListener('click', selectDisplay);
value.forEach((option) => option.addEventListener('click', optionSelected));

function timeSince(time) {
  let initialTime = new Date();
  let timeSeconds = (initialTime.getTime() - time.getTime()) / 1000;

  const initialMinute = '0 minute ago';
  const perMinute = `${Math.floor(timeSeconds / 60)} minute ago`;
  const perHour = `${Math.floor(timeSeconds / 3600)} hours ago`;
  const perDay = `${Math.floor(timeSeconds / 86400)} days ago`;

  if (timeSeconds < 60) {
    return initialMinute;
  } if (timeSeconds < 3600) {
    return perMinute;
  } if (timeSeconds <= 86400) {
    return perHour;
  } if (timeSeconds > 86400) {
    return perDay;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const initailTime = event.timeStamp;
  const t = Math.floor(initailTime) / 1000;

  const timeFormat = timeSince(new Date(Date.now() - t));

  let myTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!myTasks) {
    myTasks = [];
  }
  const taskId = myTasks.length + 1;
  const task = new AddTask(taskId, input.value, timeFormat, optionSelect);

  task.addTaskDOM(false);
  input.value = '';
});

function data(e) {
  const valueSelect = e.target.dataset.value;
  optionSelect = valueSelect;
}

value.forEach((option) => option.addEventListener('click', data));

saveLocal();

const taskListUl = document.querySelectorAll('.task__checkbox');

const deleteTask = document.querySelectorAll('.list__state--delete');

deleteTask.forEach((option) => option.addEventListener('click', (event) => {
  const _id = parseInt(event.target.id.split('-')[1]);
  const myTasks = JSON.parse(localStorage.getItem('tasks'));

  const idTask = document.getElementById('task-' + _id);
  idTask.remove();

  if (myTasks) {
    myTasks.splice(_id - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(myTasks));
    saveLocal();
  }
}));

taskListUl.forEach((option) => option.addEventListener('click', (event) => {
  const complete = event.target.checked;

  const myTasks = JSON.parse(localStorage.getItem('tasks'));

  myTasks[parseInt(event.target.id) - 1].complete = complete;

  localStorage.setItem('tasks', JSON.stringify(myTasks));
}));

const buttonClic = document.querySelector('.btn__delete');

buttonClic.addEventListener('click', (event) => {
  const myTasks = JSON.parse(localStorage.getItem('tasks'));
  let newMyTask = [];
  document.querySelectorAll('.task__checkbox').forEach((option, index) => {
    if (myTasks[index].complete) {
      const idTask = document.getElementById(`task-${index + 1}`);
      idTask.remove();
    } else {
      newMyTask.push(myTasks[index]);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(newMyTask));
});

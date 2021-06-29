import AddTask from './task.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const select = document.querySelector('select');
const taskListUl = document.querySelector('ul');
let taskList = [];
let counterId = 0;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const initailTime = event.timeStamp;
  const task = new AddTask(counterId++, input.value, select.value, initailTime);
  taskList.push(task);
  task.addTaskDOM();

  // guarda en el local storage
  localStorage.setItem('tasks', JSON.stringify(taskList));
  input.value = ''; 
})

function status() {
  for(let i = 0; i < taskList.length; i++) {
    if (taskList[i].complete === false) {
      taskList[i].complete = true
      const ready = taskList[i].complete
      console.log(ready)
    }
  }
}

taskListUl.addEventListener('click', (event) => {
  const complete = event.target.checked;
  const check = complete;
  status(check)
})


//  save tasks a local

const saveTasks = localStorage.getItem('tasks');
if (saveTasks) {
  taskList = JSON.parse(saveTasks);
}


// function createLocal(tasks) {
//   const newTask = tasks;
//   taskListUl.innerHTML += newTask;
// }

// function saveLocalStorage() {
//   const saveTasks = JSON.parse(localStorage.getItem('tasks'));
//   console.log(saveTasks)
//   if (saveTasks) {
//     taskList = saveTasks;
//     console.log(createLocal(taskList));
//   }
// }

// console.log(saveLocalStorage());



  
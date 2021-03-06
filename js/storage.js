import AddTask from './task.js';

function saveLocal() {
  const saveTasks = JSON.parse(localStorage.getItem('tasks'));
  if (saveTasks) {
    for (let i = 0; i < saveTasks.length; i++) {
      const local = new AddTask(i + 1, saveTasks[i].name, saveTasks[i].time, saveTasks[i].value);
      local.addTaskDOM();
    }
  }
}

export default saveLocal;

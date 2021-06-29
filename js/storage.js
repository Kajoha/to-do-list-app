import AddTask from './task.js';

function saveLocal() {
  const saveTasks = JSON.parse(localStorage.getItem('tasks'));
  if (saveTasks) {
    for (let i = 0; i < saveTasks.length; i++) {
      console.log(saveTasks[i].complete)
      const local = new AddTask(saveTasks[i].id, saveTasks[i].name, saveTasks[i].select, saveTasks[i].time);
      local.addTaskDOM();
    }
  }
}

export default saveLocal;
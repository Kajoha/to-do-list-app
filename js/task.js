class AddTask {
  constructor(id, name, time, optionSelect) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.value = optionSelect;
    this.complete = false;
  }

  addTaskDOM(isRefresh = true) {
    const taskListUl = document.querySelector('ul');

    if (!isRefresh) {
      let myTasks = JSON.parse(localStorage.getItem('tasks'));
      if (!myTasks) {
        myTasks = [];
      }
      const newTask = {
        id: this.id,
        name: this.name,
        time: this.time,
        value: this.value,
        complete: this.complete,
      };
      myTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(myTasks));
    }

    const content = `
    <li class="task" id="task-${this.id}">
      <div class="task__container">
        <input class="task__checkbox" id="${this.id}" type="checkbox">
        <label class="task__container--h3" for="${this.id}">${this.name}</label>
        <label class="task__container--p" for=""></label>
        <span class="task__container--span">${this.value}</span>
      </div>

      <div class="list__state">
        <button class="list__state--edit js__edit hidden">Edit</button>
        <button class="list__state--delete js__delete-bin hidden" id="d-${this.id}">Borrar</button>
      </div>
    </li>
    `;

    taskListUl.innerHTML += content;

    if (!isRefresh) {
      const d = 'd-' + this.id;
      document.getElementById(d).addEventListener('click', (event) => {
        const _id = parseInt(d.split('-')[1]);
        const myTasks = JSON.parse(localStorage.getItem('tasks'));

        const idTask = document.getElementById('task-' + _id);
        idTask.remove();

        if (myTasks) {
          myTasks.splice(_id - 1, 1);
          localStorage.setItem('tasks', JSON.stringify(myTasks));
        }
      });
    }

  }
}
export default AddTask;

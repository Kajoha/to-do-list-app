class AddTask {
  constructor(id, name, time, optionSelect) {
    this.id = id;
    this.name = name;
    this.complete = false;
    this.time = time;
    this.value = optionSelect;
  }

  addTaskDOM() {
    const taskList = document.querySelector('ul');

    const content = `
    <li class="task">
      <div class="task__container">
        <input class="task__checkbox"id="${this.id}" type="checkbox">
        <label class="task__container--h3" for="${this.id}">${this.name}</label>
        <label class="task__container--p" for=""></label>
        <span class="task__container--span">${this.value}</span>
      </div>


      <div class="list__state">
        <button class="list__state--edit hidden">Edit</button>
        <button class="list__state--delete hidden">Borrar</button>
      </div>
    </li>
    `;

    taskList.innerHTML += content;
  }
}

export default AddTask;


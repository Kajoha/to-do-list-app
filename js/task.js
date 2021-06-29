
class AddTask {
  constructor(id, name, select, time) { 
    this.id = id;
    this.name = name;
    this.select = select;
    this.complete = false;
    this.time = time;
  }
  
  addTaskDOM() {
    const taskList = document.querySelector('ul');
    console.log(taskList)

    const content = `
    <li class="task">
      <div class="task__container">
        <input class="task__checkbox"id="${this.id}" type="checkbox">
        <label class="task__container--h3" for="${this.id}">${this.name}</label>
        <label class="task__container--p" for=""></label>
        <span class="task__container--span">${this.select}</span>
      </div>
      
      <div class="list__state">
        <button class="list__state--edit hidden">Edit</button>
        <button class="list__state--delete hidden">Borrar</button>
      </div>
    </li>
    `;
    
    taskList.innerHTML += content
  }

} 

export default AddTask;
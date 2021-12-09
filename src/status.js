const listTasks = document.querySelector('.listTasks');
class Task {
  constructor(description, completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static tasks = [];

  static getDataFromLocalStorage() {
    if (!window.localStorage.getItem('tasksData')) return null;
      const data = JSON.parse(window.localStorage.getItem('tasksData'));
      data.myTasks = data.mmyBooks.map((b) => {
          const task = new Task(b.description, b.completed, b.index);
          return task;
      });
      Task.tasks = data.myTasks;
      return data;
  }

  static setDataInLocalStorage(data) {
    window.localStorage.setItem('tasksData', JSON.stringify(data));
  }

  static displayTasks() {
    const tasks = Task.getDataFromLocalStorage();
    Task.tasks.forEach((task) => {
      const listItem = document.createElement('li');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('class', 'checkboxed');
      input.setAttribute('id', `${task.index}`);
      listItem.appendChild(input);
      const label = document.createElement('label');
      label.setAttribute('class', 'label');
      listItem.appendChild(label);
      label.textContent = task.description;
      listTasks.appendChild(listItem);
    });
  }
  addTask() {
      this.index = tasks.taskCount + 1;
      tasks.myTasks.push(this);
      tasks.taskCount +=1;
      Task.setDataInLocalStorage(tasks);
      Task.displayTasks();
      description.value = '';
      completed.value = false;
  }
}

// const status = () => {
//   const checkboxed = document.getElementsByClassName('checkboxed');
//   for (let j = 0; j < checkboxed.length; j += 1) {
//     checkboxed[j].addEventListener('change', () => {
//       if (checkboxed[j].checked) {
//         checkboxed[j].nextElementSibling.style.textDecoration = 'line-through';
//         tasks[j].completed = true;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//       } else {
//         checkboxed[j].nextElementSibling.style.textDecoration = 'none';
//         tasks[j].completed = false;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//       }
//     });
//   }
// };

// const add = () => {
//   const btn = document.getElementById('arrow');
//   btn.addEventListener('click', () => {

//   })
// }
// export { status, displayTasks, tasks };
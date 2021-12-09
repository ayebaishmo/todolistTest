import './style.css';
import storage from './modules/storage';
import status from './modules/status.js';

let tasks = [];
if (localStorage.length === 0) {
  tasks = [
    {
      description: 'Wash dishes',
      completed: false,
      index: 1,
    },
    {
      description: 'Go to church',
      completed: false,
      index: 2,
    },
    {
      description: 'Fellowship with friends',
      completed: false,
      index: 3,
    },
  ];
} else {
  tasks = storage.getLocal();
}

const displayTasks = () => {
  const listTasks = document.querySelector('.listTasks');
  for (let i = 0; i < tasks.length; i += 1) {
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'checkboxed');
    input.setAttribute('id', `${tasks[i].index}`);
    listItem.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('class', 'label');
    listItem.appendChild(label);
    label.textContent = tasks[i].description;
    listTasks.appendChild(listItem);
  }
};

displayTasks();
status();
export default tasks;
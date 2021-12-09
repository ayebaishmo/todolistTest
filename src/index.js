import { join } from 'lodash';
import './style.css';
// import { check } from './modules/check';
import { storage } from './modules/storage';

let tasks = [];
if (localStorage.length === 0) {
 const tasks = [
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

const check = () => {
  const checkboxed = document.getElementsByClassName('checkboxed');
  for (let j = 0; j < checkboxed.length; j++) {
    checkboxed[j].addEventListener('change', () => {
      if(checkboxed[j].checked) {
        checkboxed[j].nextElementSibling.style.textDecoration = 'line-through';
        tasks[j].completed = true;
        console.log(tasks[j].completed);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        checkboxed[j].nextElementSibling.style.textDecoration = 'none';
        tasks[j].completed = false;
        console.log(tasks[j].completed);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
}

displayTasks();
check();



if (localStorage.length !==0) {
 const storedTasks = JSON.parse(localStorage.getItem('Tasks'));
 displayTasks(storedTasks);
}

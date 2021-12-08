import { join } from 'lodash';
import './style.css';

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

const displayTasks = () => {
  const listTasks = document.querySelector('.listTasks');
  for (let i = 0; i < tasks.length; i += 1) {
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'checkboxed');
    input.setAttribute('id', '${tasks.index}');
    listItem.appendChild(input);
    const label = document.createElement('label');
    const label2 = document.createElement('label2');
    label.setAttribute('class', 'label');
    listItem.appendChild(label);
    listItem.appendChild(label2);
    label.textContent = tasks[i].description;
    label2.textContent = tasks[i].completed;
    listTasks.appendChild(listItem);
  }
};

displayTasks();


const checkboxed = document.getElementsByClassName('checkboxed');

for (let j = 0; j < checkboxed.length; j++) {
  
  checkboxed[j].addEventListener('change', () => {
    if(checkboxed[j].checked) {
      checkboxed[j].nextElementSibling.style.textDecoration = 'line-through';
    } else {
      checkboxed[j].nextElementSibling.style.textDecoration = 'none';
    }
  });
}

const itemElement = document.getElementById(tasks.index);
const lab = itemElement.parentElement.querySelector('label');
if (itemElement.checked) {
  tasks.completed = true;
} else {
  tasks.completed = false;
}
// window.onload = displayTasks;
import { join } from 'lodash';
import './style.css';
import { check } from './modules/check';

export const tasks = [
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
check();

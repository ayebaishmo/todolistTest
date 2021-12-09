import tasks from '../index.js';

const status = () => {
  const checkboxed = document.getElementsByClassName('checkboxed');
  for (let j = 0; j < checkboxed.length; j += 1) {
    checkboxed[j].addEventListener('change', () => {
      if (checkboxed[j].checked) {
        checkboxed[j].nextElementSibling.style.textDecoration = 'line-through';
        tasks[j].completed = true;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        checkboxed[j].nextElementSibling.style.textDecoration = 'none';
        tasks[j].completed = false;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
};
export default status;
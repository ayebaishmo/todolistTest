import { tasks } from "..";

export const check = () => {
  const checkboxed = document.getElementsByClassName('checkboxed');
  for (let j = 0; j < checkboxed.length; j++) {
    checkboxed[j].addEventListener('change', () => {
      if(checkboxed[j].checked) {
        checkboxed[j].nextElementSibling.style.textDecoration = 'line-through';
        tasks[j].completed = true;
        console.log(tasks[j].completed);
      } else {
        checkboxed[j].nextElementSibling.style.textDecoration = 'none';
        tasks[j].completed = false;
        console.log(tasks[j].completed);
      }
    });
  }
}
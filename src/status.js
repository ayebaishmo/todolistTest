import { toggleComplete } from './logic.js';

export function defaultList(item, i, items) {
  const frag = document.createDocumentFragment();
  const list = document.createElement('li');
  const div = document.createElement('div');
  const check = document.createElement('input');
  const label = document.createElement('label');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const altSpan = document.createElement('span');

  div.appendChild(check);
  div.appendChild(label);
  list.appendChild(div);
  list.appendChild(spanDiv);
  spanDiv.appendChild(span);
  spanDiv.appendChild(altSpan);
  frag.appendChild(list);

  div.classList.add('todo', 'input', `${item.index}`);

  check.type = 'checkbox';
  check.name = item.index;
  check.id = item.index;
  check.checked = item.complete;

  label.classList = (item.complete);
  label.htmlFor = item.index;
  label.textContent = item.description;

  list.id = `${i}li`;

  span.innerHTML = '&#8942;';
  span.classList.add('icon', 'options-icon');
}

export const documentToDo = (list) => {
  if (list) {
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      const todoItem = list.filter((item) => item.index === i)[0];
      const completeList = defaultList(todoItem, i, list);
      completeList.check.addEventListener('click', () => {
        toggleComplete(todoItem, list);
      });
      wrapper.appendChild(completeList.frag);
    }
  }
};
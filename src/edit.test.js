import editStart from './edit';
import documentToDo from './status';
import * as ls from './storage';

jest.mock('./storage');
jest.mock('./status');

describe('Edit...', () => {
  document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `;
  const itemsFull = [{
    description: 'xyzzy',
    complete: false,
    index: 0,
  },
  {
    description: 'abcde',
    complete: true,
    index: 1,
  }];
  documentToDo(itemsFull);
  ls.saveListData(itemsFull, ls.saveDataLocation);
  const inputDiv = document.querySelector('.input');
  const altIcon = document.querySelector('.altSpan');
  editStart(inputDiv);
  const inputElem = inputDiv.querySelector('#editing');

  test('Start Editing First Item - Check Input', () => {
    expect(document.body.querySelectorAll('#editing').length).toBe(1);
  });

  test('Start Editing First Item - Toggle Icons', () => {
    expect(altIcon.style.display).toBe('initial');
  });

  inputElem.value = 'plugh';

  test('Do Not End Edit on !Enter', () => {
    inputElem.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'a',
    }));
    expect(document.body.querySelectorAll('#editing').length).toBe(1);
  });

  test('End Editing on Enter', () => {
    inputElem.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'Enter',
    }));
    expect(document.body.querySelectorAll('#editing').length).toBe(0);
  });

  test('End Editing First Item - now plugh', () => {
    const label = inputDiv.querySelector('label');
    expect(label.textContent).toBe('plugh');
  });

  test('End Editing First Item - Toggle Icons', () => {
    expect(altIcon.style.display).toBe('none');
  });
}); 
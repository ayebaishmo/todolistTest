import toggleComplete from './logic';
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

  test('Edit complete status to true', () => {
    const checked = document.getElementById('0');
    checked.click();
    toggleComplete(itemsFull[0], itemsFull);
    const newArr = ls.getListData(ls.saveDataLocation);
    expect(newArr[0].complete).toBe(true);
  });

  test('Edit complete status to false', () => {
    const checked = document.getElementById('1');
    checked.click();
    toggleComplete(itemsFull[1], itemsFull);
    const newArr = ls.getListData(ls.saveDataLocation);
    expect(newArr[1].complete).toBe(false);
  });
}); 
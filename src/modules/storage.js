const storage = (() => {
  const setLocal = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getLocal = () => {
    const localData = JSON.parse(localStorage.getItem('tasks'));
    return localData;
  };
  return { setLocal, getLocal };
})();

export default storage

export const itemComplete = (item, items) => {
  item.complete = true;
  const indexGreater = items.filter((i) => i.index > item.index);
  for (let i = 0; i < indexGreater.length; i += 1) {
    if (!indexGreater[i].complete) {
      indexGreater[i].index -= 1;
      item.index += 1;
    }
  }
};

export const itemIncomplete = (item, items) => {
  item.complete = false;
  const indexLesser = items.filter((i) => i.index < item.index);
  for (let i = 0; i < indexLesser.length; i += 1) {
    indexLesser[i].index += 1;
  }
  item.index = 0;
};
import uuid from "uuid/v4";

export const getDataById = (id, data) => data.find((c) => c.id === id);

const shuffle = (array = []) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default () =>
  new Promise((resolve, reject) => {
    let data = [
      { label: "1" },
      { label: "2" },
      { label: "3" },
      { label: "4" },
      { label: "5" },
      { label: "6" },
      { label: "7" },
      { label: "8" },
      { label: "9" },
      { label: "10" },
      { label: "11" },
      { label: "12" },
    ];
    data = [...data, ...data];
    data = data.map((card, i) => {
      return { ...card, id: uuid() };
    });
    data = shuffle(data);
    resolve(data);
  });

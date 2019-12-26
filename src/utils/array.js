const generateNumbersList = (length) => {
  const numbersList = [];
  for (let i = 1; i <= length; i++) {
    numbersList.push(i);
  }
  return numbersList;
};

export default generateNumbersList;

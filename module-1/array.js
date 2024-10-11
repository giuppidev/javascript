const values = [4, 56, 2, 41, 7];

//push
values.push(10);

//pop
const poppedElement = values.pop();

//forEach
values.forEach((value) => {
  value;
});

//map
const mappedArray = values.map((value) => {
  return value + 1;
});

//filter
const filteredExplicitArray = values.filter((value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});
const filteredArray = values.filter((value) => value % 2 === 0);

//find
const foundItem = values.find((value) => value === 41);

//findIndex
const indexFound = values.findIndex((value) => value === 41);

//slice
const slicedArray = values.slice(0, 2);

//reduce
const sum = values.reduce((acc, value) => {
  return acc + value;
}, 0);

//some
const hasEvenValues = values.some((value) => value % 2 === 0);

//every
const allEvenValues = values.every((value) => value % 2 === 0);

//sort
values.sort((a, b) => a - b);

//reverse
values.reverse();

//join
const arrayAsAString = values.join(" & ");
console.log(arrayAsAString);

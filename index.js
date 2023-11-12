let grades = [];

for (let i = 1; i <= 12; i++) {
  grades.push(Math.floor(Math.random() * 100 + 1));
}

console.log(grades);
let sum = 0;
grades.forEach((item) => {
  sum = sum + item;
});
const GPA = Math.round(sum / 12);
console.log(`Средний балл ${GPA}`);

const min = Math.min(...grades);
const max = Math.max(...grades);
console.log(`Наимбольшая оценка ${max}`);
console.log(`Наименьшая оценка ${min}`);
let quantity = 0;
grades.filter((item) => {
  if (item >= 60) {
    quantity = quantity + 1;
  }
});
console.log(`Количество учеников с положительыми оценками ${quantity}`);
let unsuccessfulQuantity = 0;
grades.filter((item) => {
  if (item <= 60) {
    unsuccessfulQuantity = unsuccessfulQuantity + 1;
  }
});
console.log(
  `Количество учеников с отрицательными оценками ${unsuccessfulQuantity}`
);
grades.forEach((item, index) => {
  if (item >= 80 && item <= 100) {
    grades.splice(index, 1, "A");
  } else if (item >= 60 && item <= 79) {
    grades.splice(index, 1, "B");
  } else if (item >= 40 && item <= 59) {
    grades.splice(index, 1, "C");
  } else if (item >= 20 && item <= 39) {
    grades.splice(index, 1, "D");
  } else if (item <= 20) {
    grades.splice(index, 1, "E");
  }
});
console.log(grades);

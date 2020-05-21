const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) =>
  num2 ? num1 / num2 : 'Não é possível divisão por zero!';

export { sum, sub, mult, div };

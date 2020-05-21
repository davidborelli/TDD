const FizzBuzz = (num) => {
  return (
    (num % 3 === 0 && num % 5 === 0 && "FizzBuzz") ||
    (num % 3 === 0 && "Fizz") ||
    (num % 5 === 0 && "Buzz") ||
    num
  );
};
export default FizzBuzz;

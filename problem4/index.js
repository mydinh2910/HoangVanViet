// Using Arithmetic Series Formula
const sum_to_a = (n) => {
  if (!Number.isSafeInteger(n) || n < 1) {
    return -1;
  }

  return (n * (n + 1)) / 2;
};

// Using Recursion
const sum_to_b = (n) => {
  if (!Number.isSafeInteger(n) || n < 1) {
    return -1;
  }

  return n === 1 ? 1 : n + sum_to_b(n - 1);
};

// Using While Loop
const sum_to_c = (n) => {
  if (!Number.isSafeInteger(n) || n < 1) {
    return -1;
  }

  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
};
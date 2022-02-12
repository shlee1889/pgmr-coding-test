function solution(numbers) {
  return 45 - numbers.reduce((prev, cur) => prev + cur, 0);
}

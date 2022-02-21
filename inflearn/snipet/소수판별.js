// 소수판별
const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num), 10); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(1));

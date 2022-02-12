function solution(absolutes, signs) {
  return absolutes.reduce((prev, cur, idx) => {
    return prev + cur * (signs[idx] ? 1 : -1);
  }, 0);
}
// signs가 true, false로 구성된 배열인 이유를 생각해보아야 했다.

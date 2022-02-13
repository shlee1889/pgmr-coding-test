function solution(brown, yellow) {
  const answer = [];
  const total = brown + yellow;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 3; i <= total / 2; i++) {
    if (
      total % i === 0 &&
      min > i + total / i &&
      (i - 2) * (total / i - 2) === yellow // point state
    ) {
      min = i + total / i;

      answer[0] = total / i;
      answer[1] = i;
    }
  }
  return answer;
}

// 모범답안
// function solution(brown, red) {
//   var answer = [];
//   for (var i = 3; i <= (brown+red)/i; i++) {
//       var x = Math.floor((brown+red)/i);
//       if( (x-2)*(i-2)=== red) {
//           break;
//       }
//   }

//   return [x,i];
// }

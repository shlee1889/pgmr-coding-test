// function solution(numbers) {
//   return numbers
//   .sort((a,b) => {(b+a) - (a+b)})
//   .join('');
// }

function solution(numbers) {
    
  var answer = numbers.map(c=> c + '').
          sort((a,b) => (b+a) - (a+b)).join('');
  
  return answer[0]==='0'? '0' : answer;
}

console.log(solution([3, 30, 34, 5, 9]));

// sort
// 3 30 34 5 9

// change
// 30 3 34 5 9

// reverse
// 9 5 34 3 30
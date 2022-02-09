function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      // i=0 일 때 arr은 ['one4seveneight']
      // i=1 일 때 arr은 ['', '4seveneight']
      // i=7 일 때 arr은 ['14', 'eight']
      answer = arr.join(i);
      // i=0 일 때 answer는 'one4seveneight'
      // i=1 일 때 answer는 '14seveneight'
      // i=7 일 때 answer는 '147eight'
  }

  return Number(answer);
}
const s = "one4seveneight";
const log = solution(s);
console.log(log);
// <--------------망한스크립트 ------------>

const 규칙 = [
  "id.length >= 3 && id.length <= 15",
  "a, 1, -, _, .;",
  ".는 처음과 끝 불가능",
  ".는 연속 불가능"
]

const 검증알고리즘 = {
  1: "toLowerCase",
  2: "무효문자 includes로 제외",
  3: "마침표 2번이상 -> 1개로",
  4: "마침표 앞뒤제거",
  5: "if new_id === ''이면 new_id = a",
  6: `if new_id.length >= 16이면 substr(0, 15) and
      new_id = new_id.replace(/.$/, "");`,
  7: "if new_id.length <= 2이면 반복문"
}
// while(new_id.length === 3){
//   let new_id_arr = Array.from(new_id);
//   new_id_arr.push(new_id.slice(-1));
  
// }

// 우선 new_id를 

const new_id = "...!@BaT#*..y.abcdefghijklm";
function solution(new_id) { // 규칙 검사 후 아이디 추천 함수
  let newId = new_id;
  
  newId.toLowerCase();
  // 정규표현식으로 푸는게 현명한데 정규표현식을 모름.

  
  var answer = ''; // 
  return answer; // 추천아이디
}
console.log(solution());
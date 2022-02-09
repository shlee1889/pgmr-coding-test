// 문자열 압축 알고리즘
/*
  문자열 s는 1이상 1000이하
  압축최소 단위는 1
  압축최대 단위는 문자열 길이의 절반.
*/

// 가장 짧은 문자열 찾기 알고리즘

function solution(s) {
  let min_len = s.length;
  
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
      let prev = s.substr(0, i);
      let cnt = 1;
      let tmp_str = '';
      
      for (let k = i; k < s.length; k += i) {
          const cur = s.substr(k, i);
          
          if (prev === cur) cnt++;
          else {
              tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
              cnt = 1;
              prev = cur;
          }
      }
      tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
      
      min_len = Math.min(min_len, tmp_str.length)
  }
  
  return min_len;
}


const s = "aabbaccc"
console.log(solution(s));
const result = solution(s) === 7 ? "Pass!" : "Fail...";
console.log(result);

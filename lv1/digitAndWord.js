

/*
숫자와 영단어 놀이

주어진 문자열에서 word리스트에 해당하는 것은 숫자로 바꿔주는 알고리즘

하고싶은것:
s를 구분할 수 있다면 좋을 것이다.
word에 존재하는 요소를 이용해서 s를 구분할 수 있을까?

정규식을 쓰는게 맞는 것 같다.

배열에 있는 요소를 정규식에서 어떻게 사용할까?
정규식 안에 배열의 요소를 넣는 방법.

정규식을 만드는 데 그걸 배열의 요소를 집어 넣는다.
/{words[i]}/

*/

const s = "one4seveneight";

function solution(s) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  for (let i = 0; i < words.length; i++){
      let w = words[i];
      const regexp = new RegExp(w, "g");
      const flag = regexp.test(s);
      if (flag) {
        s = s.replace(regexp, `${i}`);
      } else {
        continue;
      }
    }
  answer = parseInt(s, 10);
  return answer;
}
console.log(solution(s));
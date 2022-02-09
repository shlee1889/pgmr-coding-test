const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  // lottos는 []
  // win_nums는 []
  // answer는 []

  /*
  매개변수 정렬 함수:
  당첨확인함수:
  범위출력함수:
  최고순위: Q가 맞았을 경우
  최저순위: Q가 틀렸을 경우
  중간은 생각하지 않으므로 난이도가 쉬움.

  시도1
  1.입력값 정렬 sort매서드 사용.
  2.lottos와 win_nums 순서대로 매칭. Map객체
  2-1. 매칭되지 않은 숫자 
  3.Q가 맞았을 경우와 틀렸을 경우 나눈다.

  시도2
  includes돌려본다. -> 틀린번호배열리턴함수
  6 - 틀린번호개수 = 초기당첨개수
  최저순위 = rankRule.초기당첨개수
  최고순위 = rankRule.(초기당첨개수 + 0의 개수)
  answer = [최고순위, 최저순위]
  */
 

  const Q = 0;
  const rankRule = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  const winLottos = lottos.filter(x => win_nums.includes(x));
  const qNums = lottos.filter(x => x===0);
  const highestRank = rankRule[winLottos.length + qNums.length];
  const lowestRank = rankRule[winLottos.length];
  
  const answer = [highestRank, lowestRank];

  return answer;
}
console.log(solution(lottos, win_nums));
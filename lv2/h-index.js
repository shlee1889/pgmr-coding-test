// h의 최댓값을 구하기.
// n = citations.length
// h = 0 일 때, 0번 이상 인용된 논문은 5개 나머지가 없다.
// h = 1 일 때, 1번 이상 인용된 논문은 4개 나머지 논문이 1번 이하. 성립
// h = 2 일 때, 2번 이상 인용된 논문은 3개 이상 나머지 논문이 2번 이하. 성립
// h = 3 일 때, 3번 이상 3개 이상.
// h = 4 일 때, 4번 이상 2개 -> X
// h = 5 일 때, 5번 이상 인용된 논문은 2개 -> 성립불가

// 조건1 h번과 인용된 논문 이상값이 같다.
// citations안에서 h 이상의 값의 개수와 h가 같은 경우
// 나머지 h 이하의 값 의 개수가 h 이하인 경우
// 두 조건을 만족하는 h 중에 최댓값

// h의 시작점, 즉 최솟값을 생각해봐야한다.
// 최저 1은 있을 때 h = 1 통과
// h

// citation 오름차순 정렬
// newcitation = [0, 1, 3, 5, 6]
// h번 이상 처리 함수: h의 인덱스부터의 값의 길이가 h이상.
// 나머지 논문 처리 함수: h의 인덱스 이전의 값의 길이가
// newcitation.slice(h, length-1).length > h

//   const newCitations = citations.sort((a, b) => a - b)
//   const newArr = newCitations.filter((h, i, arr) => {
//     const hArr = arr.slice(i, arr.length)
//     return hArr.length >= h
//   })
//   return Math.max(...newArr)

function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a) // 내림차순
  

}
console.log(solution([3, 0, 6, 1, 5]));
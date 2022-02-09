// 완전탐색 1단계
function solution(answers) {
  const answer = [];
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let points = new Array(pattern.length).fill(0);
  answers.forEach((v, i) => {
    if (v === pattern[0][i % pattern[0].length]) points[0]++;
    if (v === pattern[1][i % pattern[1].length]) points[1]++;
    if (v === pattern[2][i % pattern[2].length]) points[2]++;
  });
  const max = Math.max(...points);
  points.forEach((v, i) => {
    if (v === max) answer.push(i + 1);
  });

  return answer;
}

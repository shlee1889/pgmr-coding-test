// 정규표현식으로 풀기
function solution(new_id) {
  const userId = new_id
      .toLowerCase()
      .replace(/[^\w\d-_.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .padEnd(1, 'a')
      .slice(0,15)
      .replace(/\.$/g, '')
  
  const answer = userId.padEnd(3, userId[userId.length - 1])

  return answer;
}

console.log(solution("z-+.^."));

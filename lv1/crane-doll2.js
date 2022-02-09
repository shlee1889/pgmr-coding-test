// 내가 찾은 모범 답안

function solution(board, moves) {
  let count = 0;
  const bucket = [];
  moves.forEach((line) => {
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][line - 1];
      if (doll === 0) continue;

      if (doll === bucket[bucket.length - 1]) {
        bucket.pop();
        count += 2;
      } else {
        bucket.push(doll);
      }
      board[i][line - 1] = 0;
      break;
    }
  });
  return count;
}

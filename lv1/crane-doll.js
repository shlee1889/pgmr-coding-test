// 배열 탐색

function solution(board, moves) {
  let count = 0;
  const bucket = [];
  moves.forEach((line) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][line - 1] !== 0) {
        bucket.push(board[i][line - 1]);
        board[i][line - 1] = 0;
        if (bucket.length < 2) break;
        else if (bucket[bucket.length - 2] === bucket[bucket.length - 1]) {
          bucket.pop();
          bucket.pop();
          count += 2;
        }
        break;
      }
    }
  });
  return count;
}

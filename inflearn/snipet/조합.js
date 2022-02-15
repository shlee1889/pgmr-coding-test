// 배열의 길이에 대한 조합의 수
let nums = [2, 2, 3, 6]; // 배열
function DFS(l, s) {
  for (let i = s; i < nums.length; i++) {
    DFS(l + 1, i + 1);
  }
}

DFS(0, 0);

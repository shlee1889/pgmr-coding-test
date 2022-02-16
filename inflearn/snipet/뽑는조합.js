// N개의 카드 중에 3개의 카드를 뽑는 모든 경우
let tmp = new Set();
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      tmp.add(card[i] + card[j] + card[k]);
    }
  }
}

let number = 307; // 자연수
const reverseNumber = (num) => {
  let res = 0;
  while (num) {
    let t = num % 10; // 일의 자리 분해
    res = res * 10 + t; // 한자리 올리기
    num = parseInt(num / 10); // 분해한 일의 자리 앞의 수
  }
};

// 루프를 돌면서
// 307
// 7
// 70
// 703
// 순서로 만들어져 간다.

// 배열로 만들어서 reverse 하는 방법도 가능하다.

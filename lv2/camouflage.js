// 위장

// 의상의 종류가 키값 의상들은 밸류
//

function solution(clothes) {
  // let answer = 0; // 조합의 수
  // let acc = 1;
  // let sum = 0;
  // const map = new Map();
  // for (let i = 0; i < clothes.length; i++) {
  //   if (map.has(clothes[i][1])) {
  //     map.get(clothes[i][1]).push(clothes[i][0]);
  //   } else {
  //     map.set(clothes[i][1], [clothes[i][0]]);
  //   }
  // }
  // console.log(map);
  // for (let v of map.values()) {
  //   acc = acc * v.length;
  //   sum = sum + v.length;
  // }
  // answer = acc + sum;
  // return answer;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

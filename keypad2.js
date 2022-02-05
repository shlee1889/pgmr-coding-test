/*
Refactoring

-거리계산 바꾸기(대각의길이 -> 가로세로더한값)
*/


function solution(numbers, hand) {
  const 좌표 = {
    12: [0,0], 11: [1,0], 10: [2,0],
    7: [0,1], 8: [1,1], 9: [2,1],
    4: [0,2], 5: [1,2], 6: [2,2],
    1: [0,3], 2: [1,3], 3: [2,3]
  }
  
  let leftLoca = 좌표[10];
  let rightLoca = 좌표[12];
  let leftDist = 0;
  let rightDist = 0;

  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      leftLoca = 좌표[numbers[i]];
      numbers[i] = "L";
    } else if ([3, 6, 9].includes(numbers[i])) {
      rightLoca = 좌표[numbers[i]];
      numbers[i] = "R";
    } else {
      
      if (numbers[i] === 0) numbers[i] = 11;

      // 왼손엄지가 최종적으로 움직이는 스텝수
      leftDist = Math.abs(좌표[numbers[i]][0]-leftLoca[0],2) 
      + Math.abs(좌표[numbers[i]][1]-leftLoca[1],2);
      // 오른손엄지가 최종적으로 움직이는 스텝수
      rightDist = Math.abs(좌표[numbers[i]][0]-rightLoca[0],2) 
      + Math.abs(좌표[numbers[i]][1]-rightLoca[1],2);
      
      if (leftDist === rightDist) {
        if (hand === "left") {
          leftLoca = 좌표[numbers[i]];
          numbers[i] = "L";
        } else {
          rightLoca = 좌표[numbers[i]];
          numbers[i] = "R";
        }
      } else if (leftDist < rightDist) {
        leftLoca = 좌표[numbers[i]];
        numbers[i] = "L";
      } else if (leftDist > rightDist) {
        rightLoca = 좌표[numbers[i]];
        numbers[i] = "R";
      }
    }
  }
  const answer = numbers.join('');
  
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// result: "LRLLLRLLRRL"
function solution(id_list, report, k) {
  // set으로 중복을 제거하고 split으로 문자열 데이터를 배열로 바꾸기
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});

  // 
  let counts = new Map();
  for (const bad of reports){
    // bad[1]은 신고당한 유저
    // undefined + 1은 NaN, 즉 false값
      counts.set(bad[1],counts.get(bad[1])+1||1)
  } // 카운트 알고리즘

  // 결과 메일을 받을 유저
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}
function solution(phone_book) {
  let answer = true; // 접두어인 경우가 없는 경우로 초기화.

  // 탐색을 하는데, 접두어라는 키값이 되는것. split 이용할 수 있을까?
  // 기본적으로는 indexOf 의심.
  // 두번째 startsWith 의심.

  phone_book.sort((a, b) => a.length - b.length);

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].startsWith(phone_book[i])) return false;
    }
  }

  return answer;
}

console.log(solution(["12", "123", "1235", "567", "88"]));

// map vs reduce
// reduce를 사용해보았다.

const solution = (array, commands) => {
  const results = commands.reduce((box, item, i) => {
      let cutArr = array.slice(item[0]-1, item[1]);
      box.push(cutArr.sort((a, b) => a - b)[item[2]-1]);
      return box;
  }, []);

  return results;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
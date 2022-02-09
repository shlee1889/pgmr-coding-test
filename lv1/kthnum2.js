// 다른 답안까지 고려해서 내가 생각하는 최적의 답안

function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0]-1, v[1]).sort((a, b) => a - b)[v[2]-1];
    });
}
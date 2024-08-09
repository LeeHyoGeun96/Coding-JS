function solution(n) {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    return arr.reduce((acc, cur) => {
        if(n % 2 !== 0 && cur <= n && cur % 2 !== 0){
            return acc += cur;
        } else if (n % 2 === 0 && cur <= n && cur % 2 === 0){
            return acc += cur ** 2;
        }
        return acc;
    }, 0);
}
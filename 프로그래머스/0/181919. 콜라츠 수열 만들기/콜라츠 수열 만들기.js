function solution(n) {
    const arr = [];
    arr.push(n);
    if(n === 1){
        return arr;
    }
    if(n % 2 === 0){
        arr.push(...solution(n / 2));
        return arr;
    } 
    arr.push(...solution(3 * n + 1));
    return arr;
}
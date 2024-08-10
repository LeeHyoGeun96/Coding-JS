function solution(a, b) {
    const aIsOdd = a % 2 !== 0;
    const bIsOdd = b % 2 !== 0;
    if(aIsOdd && bIsOdd){
        return a ** 2 + b ** 2;
    } else if(aIsOdd || bIsOdd) {
        return 2 * (a + b);
    }
    return Math.abs(a - b);
}
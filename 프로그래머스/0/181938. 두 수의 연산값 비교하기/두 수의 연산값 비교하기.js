function solution(a, b) {
    return Math.max(Number(`${a}${b}`), a * b * 2)
}

/*
function solution(a, b) {
    return +(a + "" + b) > 2 * a * b ? +(a + "" + b) : 2 * a * b;
}
*/
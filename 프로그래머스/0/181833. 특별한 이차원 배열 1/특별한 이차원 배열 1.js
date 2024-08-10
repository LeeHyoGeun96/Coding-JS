function solution(n) {
    // n x n 배열 생성
    let arr = Array.from({ length: n }, () => Array(n).fill(0));

    // 주대각선에 1을 채워 넣기
    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
    }

    return arr;
}
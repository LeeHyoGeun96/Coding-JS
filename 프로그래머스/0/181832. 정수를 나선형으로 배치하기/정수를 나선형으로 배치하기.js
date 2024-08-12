function solution(n) {
    // n x n 크기의 2차원 배열을 0으로 초기화
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let num = 1;  // 채워질 숫자
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        // 왼쪽에서 오른쪽으로 채우기
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // 위에서 아래로 채우기
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // 오른쪽에서 왼쪽으로 채우기
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        // 아래에서 위로 채우기
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
}
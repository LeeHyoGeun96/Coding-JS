function solution(picture, k) {
     const result = [];

    for (let row of picture) {
        // 각 행(row)의 각 문자를 k번 반복하여 가로 확장
        const expandedRow = [...row].map(char => char.repeat(k)).join('');
        
        // 확장된 행을 k번 반복하여 세로 확장
        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}
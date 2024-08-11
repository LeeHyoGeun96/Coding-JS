function solution(arr, k) {
    const set = new Set(arr);
    const result = [...set];
    
    while (result.length < k) {
        result.push(-1);
    }
    
    return result.slice(0, k);
}
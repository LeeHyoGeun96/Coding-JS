function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}


/*
function solution(arr, k) {
    const set = new Set(arr);
    const result = [...set];
    
    while (result.length < k) {
        result.push(-1);
    }
    
    return result.slice(0, k);
}
*/
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}

/*
function solution(arr, flag) {
    return flag.reduce((acc, cur, idx) => {
        if(cur){
            acc.push(...[...String(arr[idx]).repeat(arr[idx] * 2)].map(cur => +cur));
            return acc;
        } 
        return acc.slice(0, acc.length - arr[idx]);
    },[]);
}
*/
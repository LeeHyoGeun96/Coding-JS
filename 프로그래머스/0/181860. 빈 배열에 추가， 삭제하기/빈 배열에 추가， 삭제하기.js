function solution(arr, flag) {
    return flag.reduce((acc, cur, idx) => {
        if(cur){
            acc.push(...[...String(arr[idx]).repeat(arr[idx] * 2)].map(cur => +cur));
            return acc;
        } 
        return acc.slice(0, acc.length - arr[idx]);
    },[]);
}
function solution(arr, n) {
    return arr.map((cur,idx) => {
        if(arr.length % 2 === 0 && idx % 2 !== 0){
            return cur + n;
        } else if(arr.length % 2 !== 0 && idx % 2 ===0){
            return cur + n;
        }
        return cur
    });
}
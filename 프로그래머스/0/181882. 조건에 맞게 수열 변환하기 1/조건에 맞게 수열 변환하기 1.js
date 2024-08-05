function solution(arr) {
    return arr.map((cur) => {
        if(cur >= 50 && cur % 2 === 0){
            return cur / 2;
        } else if(cur < 50 && cur % 2 !== 0){
            return cur * 2;
        }
        return cur
        
    });
}
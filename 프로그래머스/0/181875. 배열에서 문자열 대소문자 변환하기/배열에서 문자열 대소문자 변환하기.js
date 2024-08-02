function solution(strArr) {
    return strArr.map((cur, idx)=> {
        if(idx % 2 === 0){
            return cur.toLowerCase();
        } else {
             return cur.toUpperCase();
        }
    });
}
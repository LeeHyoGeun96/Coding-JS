function solution(q, r, code) {
    return [...code].reduce((acc, cur, idx) => {
        if(idx % q === r){
            acc += cur;
        }
        return acc;
        },'');
}
function solution(a, d, included) {
    let sum = 0;
    for(const [idx, bool] of included.entries()){
        if(!bool){
            continue;
        }
        sum +=  a + (d * idx);
    }
    return sum;
}
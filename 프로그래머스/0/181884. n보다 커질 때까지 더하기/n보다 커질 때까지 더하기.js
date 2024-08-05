function solution(numbers, n) {
    let sum = 0;
    for(const num of numbers){
        if(sum > n){
            break;
        }
        sum += num;
    }
    
    return sum;
}
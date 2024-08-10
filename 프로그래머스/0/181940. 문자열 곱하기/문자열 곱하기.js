function solution(my_string, k) {
    let i = 0;
    let result = '';
    while(i < k){
        result += my_string;
        i++;
    }
    return result;
}
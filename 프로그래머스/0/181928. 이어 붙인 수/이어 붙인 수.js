function solution(num_list) {
    let even  = "";
    let odd = "";
    for(let num of num_list){
        if(num % 2 === 0){
            even += num;
            continue;
        }
        odd += num;
    }
    return +even + +odd;
}
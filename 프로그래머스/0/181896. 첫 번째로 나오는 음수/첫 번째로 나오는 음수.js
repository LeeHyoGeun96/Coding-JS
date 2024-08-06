function solution(num_list) {
    for(const [index, num] of num_list.entries()){
        if(num < 0){
            return index;
        }
    }
    return -1;
}
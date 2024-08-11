function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        let num = 0;
        while(true){
            if(cur === 1){
                break;
            }
            cur = cur % 2 === 0 ? cur / 2 : (cur - 1) / 2 ;
            num++;
        }
        return acc + num;
    },0);
}
function solution(arr) {
    let num = 0;
    while(true){
        const newArr = arr.map(cur => {
            if(cur >= 50 && cur % 2 === 0){
                return cur / 2;
            } else if(cur < 50 && cur % 2 !==0){
                return cur * 2 + 1;
            }
            return cur;
        });
        if(arr.every((value, index) => value === newArr[index])){
            break;
        }
        arr = newArr;
        num++;
    }
    return num;
}
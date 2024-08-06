function solution(n, control) {
    let result = n;
    for(let direction of control){
        switch(direction){
                case('w'):
                    result += 1;
                    break;
                case('s'):
                    result -= 1;
                    break;
                case('d'):
                    result += 10;
                    break;
                case('a'):
                    result -= 10;
        }
    }
    return result;
}
function solution(numLog) {
    return numLog.reduce((acc, cur, idx) => {
        const num = numLog[idx + 1] - cur;
        switch(num){
            case 1:
                return acc + 'w';
            case -1:
                return acc + 's';
            case 10:
                return acc + 'd';
            case -10:
                return acc + 'a';
            default:
                return acc;
        }
    } ,'');
}
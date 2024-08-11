function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}


/*
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
*/
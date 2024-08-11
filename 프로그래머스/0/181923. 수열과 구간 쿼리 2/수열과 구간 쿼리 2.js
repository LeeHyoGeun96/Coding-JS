function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}


/*
function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e, k] = cur;    
        let minNum = -1;
        for(let i = s; i <= e; i++){
            if(arr[i] > k){
                if(minNum === -1){
                    minNum = arr[i];
                }
                minNum = arr[i] < minNum ? arr[i] : minNum;
            }
        }
        acc.push(minNum);
        return acc;
    }, []);
}
*/
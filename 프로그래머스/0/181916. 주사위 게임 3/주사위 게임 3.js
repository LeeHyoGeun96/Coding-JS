function solution(a, b, c, d) {
    const scoreMap = new Map();
    for(const num of [a,b,c,d]){
        scoreMap.set(num, (scoreMap.get(num) || 0) + 1);
    }
    switch (scoreMap.size){
        case 1:{
            const p = [...scoreMap.keys()][0];
            return 1111 * p;
        }
        case 2:{
            const entries = [...scoreMap.entries()].sort(([, aVal], [, bVal]) => bVal - aVal);
            const [[p, pVal], [q, qVal]] = entries;
            if(pVal === 2){
                return (p + q) * Math.abs(p - q);
            }
            return (10 * p + q) ** 2;
        }
        case 3:{
            const entries = [...scoreMap.entries()].sort(([, aVal], [, bVal]) => bVal - aVal);
            const [[p, pVal],[q, qVal], [r,rVal]] = entries;
            return q * r;
        }
        case 4:
            return Math.min(...scoreMap.keys());
    }
}
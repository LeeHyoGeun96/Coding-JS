function solution(rank, attendance) {
    const newRank = rank.reduce((acc, cur, idx) => {
        if(attendance[idx]){
            acc.push([idx, cur]);
            return acc;
        }
        return acc;
    }, []).sort((a, b) => a[1] - b[1]).slice(0,3);
    const [[a,],[b,],[c,]] = newRank;
    return 10000 * a + 100 * b + c;
}
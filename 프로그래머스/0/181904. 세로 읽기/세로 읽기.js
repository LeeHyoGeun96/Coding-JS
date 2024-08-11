function solution(my_string, m, c) {
    const strArr = [...my_string].reduce((acc, cur, idx) => {
        if(idx % m === 0) acc.push(cur);
        else acc[acc.length - 1] += cur;
        return acc;
    },[])
    return strArr.reduce( (acc,cur) => acc + cur[c - 1],'');
}
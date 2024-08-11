function solution(myStr) {
    const list = myStr.split(/[a|b|c]/).filter(str => str);
    return list.length ? list : ["EMPTY"];
}

/*
function solution(myStr) {
    const str = myStr.replace(/[abc]/g, '0');
    const arr = str.split('0').filter((cur) => cur);
    return arr.length === 0 ? ["EMPTY"] : arr;
}
*/
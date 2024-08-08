function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
}



/*
function solution(num_list) {
    const arrMult = num_list.reduce((acc, cur) => acc * cur,1);
    const arrSumSquare = Math.pow(num_list.reduce((acc,cur)=> acc + cur) , 2)
    return arrSumSquare > arrMult ? 1 : 0;
}
*/
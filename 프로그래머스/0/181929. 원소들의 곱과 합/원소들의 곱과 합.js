function solution(num_list) {
    const arrMult = num_list.reduce((acc, cur) => acc * cur,1);
    const arrSumSquare = Math.pow(num_list.reduce((acc,cur)=> acc + cur) , 2)
    return arrSumSquare > arrMult ? 1 : 0;
}
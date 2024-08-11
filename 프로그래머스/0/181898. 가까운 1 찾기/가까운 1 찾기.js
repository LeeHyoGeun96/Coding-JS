function solution(arr, idx) {
  return arr.findIndex((v, i) => idx <= i && v === 1);
}


/*
function solution(arr, idx) {
    return arr.indexOf(1,idx);
}
*/
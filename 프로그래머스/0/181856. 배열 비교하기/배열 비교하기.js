const ArrSum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
}

function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        arr1Length = ArrSum(arr1);
        arr2Length = ArrSum(arr2);
        if(arr1Length === arr2Length) return 0;
        return arr1Length > arr2Length ? 1 : -1;
    }
    return arr1.length > arr2.length ? 1: -1;
}
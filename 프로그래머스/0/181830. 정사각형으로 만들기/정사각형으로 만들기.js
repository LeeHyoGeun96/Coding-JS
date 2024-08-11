function solution(arr) {
    const newArr = [...arr];
    const maxNum = Math.max(arr.length, arr[0].length);
    if(maxNum !== arr.length){
        for(let i = 0; i < maxNum - arr.length; i++){
            newArr.push(new Array(maxNum).fill(0));
        }
    }
    if(maxNum !== arr[0].length){
        const defaultArrLength = arr[0].length
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < maxNum - defaultArrLength; j++){
                newArr[i].push(0);
            }
        }
        
    }
    return newArr;
}
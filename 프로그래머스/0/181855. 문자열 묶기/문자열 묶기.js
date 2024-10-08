function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}

/*
function solution(strArr) {
    const lengthMap = new Map();
    for(const str of strArr){
        const len = str.length;
        if(lengthMap.has(len)){
            lengthMap.set(len, lengthMap.get(len) + 1);
            continue;
        }
        lengthMap.set(len, 1);
    }
    
    let maxGroupSize = 0;
    for(let size of lengthMap.values()){
        if(size > maxGroupSize){
            maxGroupSize = size
        }
    }
    return maxGroupSize;
}
*/
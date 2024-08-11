function solution(myString, pat) {
    let fromIndex = 0;
    let answer = 0;
    while(true){
        const findedIndex = myString.indexOf(pat, fromIndex);
        if(findedIndex === -1){
            break;
        }
        fromIndex = findedIndex + 1;
        answer++;
    }
    return answer;
}
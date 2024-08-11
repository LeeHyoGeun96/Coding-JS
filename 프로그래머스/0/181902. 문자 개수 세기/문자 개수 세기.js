function solution(my_string) {
    const answer = new Array(52).fill(0);
    const aCode = 'a'.charCodeAt();
    const zCode = 'z'.charCodeAt();
    const ACode = 'A'.charCodeAt();
    const ZCode = 'Z'.charCodeAt();
    for(let char of my_string){
        const codeNum = char.charCodeAt();
        if(ZCode - codeNum >= 0){
            answer[codeNum - ACode] += 1;
            continue;
        }
        answer[26 + codeNum - aCode] += 1;
    }
    return answer;
}
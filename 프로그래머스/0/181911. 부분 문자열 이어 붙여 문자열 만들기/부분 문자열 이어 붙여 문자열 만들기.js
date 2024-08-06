function solution(my_strings, parts) {
    let answer = '';
    let i = 0;
    for([s, e] of parts){
       answer += my_strings[i++].slice(s,e + 1);
    }
    return answer;
}
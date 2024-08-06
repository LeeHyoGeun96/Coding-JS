function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, '');
}

/*
function solution(my_strings, parts) {
    let answer = '';
    let i = 0;
    for([s, e] of parts){
       answer += my_strings[i++].slice(s,e + 1);
    }
    return answer;
}

*/
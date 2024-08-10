function solution(my_string) {
    const arr = [];
    for(let i = my_string.length - 1; i >= 0 ; i--){
        arr.push(my_string.slice(i));
    }
    return arr.sort();
}
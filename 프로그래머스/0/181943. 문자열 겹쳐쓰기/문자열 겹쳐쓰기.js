function solution(my_string, overwrite_string, s) {
    const newArr = [...my_string];
    newArr.splice(s, overwrite_string.length, overwrite_string);
    return newArr.join('');
}
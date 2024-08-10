function solution(str_list, ex) {
    return str_list.filter((cur) => !cur.includes(ex)).join('');
}
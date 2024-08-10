function solution(arr, delete_list) {
    return arr.filter((cur) => !delete_list.includes(cur));
}
function solution(intStrs, k, s, l) {
    return intStrs.map((cur) => +cur.slice(s, s + l)).filter(cur => cur > k);
}
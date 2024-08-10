function solution(myString) {
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}

/*
function solution(myString) {
    return [...myString].map((cur) => {
        return cur.charCodeAt(0) <= 'l'.charCodeAt(0) ? 'l' : cur;
    }).join('');
}
*/
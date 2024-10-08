function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

/*
function solution(arr) {
    return arr.reduce((acc, cur) => {
        const subArr = [];
        for(let i = 0; i < cur; i++){
            subArr.push(cur);
        }
        return [...acc, ...subArr]
    },[])
}
*/
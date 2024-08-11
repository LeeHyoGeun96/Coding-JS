function solution(order) {
    return order.reduce((acc, cur) => {
        if(cur.includes('americano') || cur.includes('anything')){
            return acc += 4500;
        }
        return acc += 5000;
    },0)
}
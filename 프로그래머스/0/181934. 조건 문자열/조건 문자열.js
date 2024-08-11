function solution(ineq, eq, n, m) {
    if(eq === '='){
        if(ineq === '>'){
            return +(n >= m);
        }
        return +(n <= m);
    }
    if(ineq === '>'){
        return +(n > m);
    }
    return +(n < m);
}
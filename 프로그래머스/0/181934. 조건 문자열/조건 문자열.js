const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

/*
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
*/
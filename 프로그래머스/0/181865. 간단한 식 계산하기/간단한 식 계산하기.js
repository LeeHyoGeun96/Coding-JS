const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}
/*
function solution(binomial) {
    let [a, op, b] = binomial.split(' ');
    a = +a;
    b = +b;
    switch(op){
        case '+':
                return a + b;
        case '-':
                return a - b;
        case '*':
                return a * b;
    }
}
*/
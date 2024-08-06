const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
/*
function solution(n, control) {
    let result = n;
    for(let direction of control){
        switch(direction){
                case('w'):
                    result += 1;
                    break;
                case('s'):
                    result -= 1;
                    break;
                case('d'):
                    result += 10;
                    break;
                case('a'):
                    result -= 10;
        }
    }
    return result;
}
*/
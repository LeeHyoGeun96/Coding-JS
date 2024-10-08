const slices = {
  1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
  2: (num_list, [a, b, c]) => num_list.slice(a),
  3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
  4: (num_list, [a, b, c]) => num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

function solution(n, slicer, num_list) {
  return slices[n](num_list, slicer);
}


/*
function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    switch(n){
        case 1: 
            return num_list.slice(0, b + 1);
        case 2: 
            return num_list.slice(a);
        case 3: 
            return num_list.slice(a, b + 1);
        case 4: 
            const arr =[];
            for(let i = a; i <= b; i += c){
                arr.push(num_list[i]);
            }
            return arr;
    }
}
*/
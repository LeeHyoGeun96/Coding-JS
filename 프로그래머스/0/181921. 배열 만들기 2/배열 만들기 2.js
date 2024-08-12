function solution(l, r) {
    var answer = [];
    const regex = /['1'|'2'|'3'|'4'|'6'|'7'|'8'|'9']/g
    for(let i = l; i <= r; i++){
        if(String(i).search(regex) === -1){
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}
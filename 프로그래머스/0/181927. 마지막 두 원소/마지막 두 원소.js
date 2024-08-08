function solution(num_list) {
    const answer = [...num_list];
    const last = num_list.at(-1);
    const preLast = num_list.at(-2);
    if(last > preLast){
        answer.push(last - preLast);
    } else {
        answer.push(last * 2);
    }
    return answer;
}
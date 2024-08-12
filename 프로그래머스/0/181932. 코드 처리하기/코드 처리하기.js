function solution(code) {
    let mode = 0;
    let ret = '';
    for(const [idx, value] of [...code].entries()){
        if(mode === 0){
            if(+value === 1){
                mode = 1;
                continue;
            }
            if(idx % 2 === 0){
                ret += value;
            }
        } else{
            if(+value === 1){
                mode = 0;
                continue;
            }
            if(idx % 2 !== 0){
                ret += value;
            }
        }
        
    }
    return ret.length === 0 ? "EMPTY" : ret;
}
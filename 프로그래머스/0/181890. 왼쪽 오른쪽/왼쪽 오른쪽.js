function solution(str_list) {
    const lIdx = str_list.indexOf('l');
    const rIdx = str_list.indexOf('r');
    if(lIdx === -1 && rIdx === -1){
        return [];
    }
    if (lIdx !== -1 && (rIdx === -1 || lIdx < rIdx)) {
        return lIdx > 0 ? str_list.slice(0, lIdx) : [];
    }
    
    if (rIdx !== -1 && (lIdx === -1 || rIdx < lIdx)) {
        return str_list.slice(rIdx + 1);
    }

    return [];
}
function solution(myString, pat) {
    const reversePat = [...pat].map((cur) => {
        return cur === 'A' ? 'B' : 'A';
    }).join('');
    return +myString.includes(reversePat);
}
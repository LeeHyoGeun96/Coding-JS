function solution(myString) {
    return myString.split('x').filter((cur) => !!cur).sort();
}
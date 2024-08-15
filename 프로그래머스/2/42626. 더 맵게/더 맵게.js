class BinaryHeap{
    constructor(type){
        this.heap = [];
        if(type === 'max'){
            this.compare = (a,b) => a > b ;
        } else if(type === 'min'){
            this.compare = (a, b) => a < b;
        } else {
            throw new Error('max or min');
        }
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    removeRoot() {
        if(this.heap.length === 0) null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0 && last != undefined){
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }
    
    bubbleDown(){
        let idx = 0;
        const length = this.heap.length;
      
        while(true){
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            const element = this.heap[idx];
            let swapIdx = null;
            
            if(leftChildIdx < length) {
                const leftChild = this.heap[leftChildIdx];
                if(this.compare(leftChild, element)){
                    swapIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                const rightChild = this.heap[rightChildIdx];
                if(
                    swapIdx === null ? this.compare(rightChild, element) :
                    this.compare(rightChild, this.heap[swapIdx])
                ){
                    swapIdx = rightChildIdx;
                }
            }
            
            if(swapIdx === null) break;
            
            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
            idx = swapIdx;
        }
    }
    
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        
        while(idx > 0){
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            
            if(this.compare(element, parent)){
                [this.heap[idx], this.heap[parentIdx]] = [parent, element];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }
}

function solution(scoville, K) {
    const minHeap = new BinaryHeap('min');
    let answer = 0;
    for(const score of scoville){
        minHeap.insert(score);
    }
    while(minHeap.heap.length > 1){
        const first = minHeap.removeRoot();
        if(first >= K) return answer;
        
        const second = minHeap.removeRoot();
        const newScoville = first + (second * 2);
        
        minHeap.insert(newScoville);
        answer++;
        }
        
    
    return minHeap.removeRoot() >= K ? answer : -1;
}
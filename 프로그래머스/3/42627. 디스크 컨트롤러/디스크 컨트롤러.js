class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(job) {
        this.heap.push(job);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const last = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (last[1] >= parent[1]) break;
            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = last;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const root = this.heap[index];

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftIndex < length) {
                leftChild = this.heap[leftIndex];
                if (leftChild[1] < root[1]) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                rightChild = this.heap[rightIndex];
                if (
                    (swapIndex === null && rightChild[1] < root[1]) ||
                    (swapIndex !== null && rightChild[1] < leftChild[1])
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }

        this.heap[index] = root;
    }

    size() {
        return this.heap.length;
    }
}

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시간 기준으로 정렬
    const minHeap = new MinHeap();
    let currentTime = 0;
    let totalWaitingTime = 0;
    let jobIndex = 0;
    let completedJobs = 0;

    while (completedJobs < jobs.length) {
        // 현재 시간에 수행할 수 있는 작업들을 힙에 삽입
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
            minHeap.insert(jobs[jobIndex]);
            jobIndex++;
        }

        if (minHeap.size() > 0) {
            const [start, duration] = minHeap.extractMin();
            currentTime += duration;
            totalWaitingTime += currentTime - start;
            completedJobs++;
        } else {
            // 수행할 수 있는 작업이 없다면 시간을 다음 작업의 요청 시간으로 건너뜁니다.
            currentTime = jobs[jobIndex][0];
        }
    }

    return Math.floor(totalWaitingTime / jobs.length);
}
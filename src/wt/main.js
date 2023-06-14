import { Worker } from 'worker_threads'
import { cpus } from 'os'
const cpu_num = cpus().length
const path = './src/wt/worker.js'
const result = []

function createWorker(num) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path, {
            workerData: num
        })
        worker.on('message', resolve)
        worker.on('error', reject)
    })
}

const performCalculations = async () => {
    const promises = []
    for (let num = 0; num < cpu_num; num++) 
        promises.push(createWorker(10 + num))
    await Promise.allSettled(promises).then((results) => {
        results.forEach((worker_result) => {
            if (worker_result.status == 'fulfilled') {
                result.push({
                    status: 'resolved',
                    data: worker_result.value
                })
            } else {
                result.push({
                    status: 'error',
                    data: none
                })
            }
        })
    })
};

await performCalculations();
console.log(result)

import { Transform } from 'stream'

const transform = async () => {
    const stream_transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join("").slice(1) + '\n') // slice(1) + '\n' for more logical visualization
        },
    })
    process.stdin.pipe(stream_transform).pipe(process.stdout)
};

await transform();
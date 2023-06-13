import fs from 'fs'
const path = './src/streams/files/fileToWrite.txt'

const write = async () => {
    const stream_out = fs.createWriteStream(path)
    process.stdin.pipe(stream_out)
};

await write();
import fs from 'fs'
const path = './src/streams/files/fileToRead.txt'

const read = async () => {
    const stream_in = fs.createReadStream(path, 'utf8')
    stream_in.pipe(process.stdout)
};

await read();
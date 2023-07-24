import fs from 'fs'
const path = './src/fs/files/fileToRead.txt'

const read = async () => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err)
            throw new Error('FS operation failed')
        console.log(data)
    })
};

await read();
import fs from 'fs'
const path = './src/fs/files/'

const list = async () => {
    fs.readdir(path, (err, files) => {
        if (err)
            throw new Error('FS operation failed')
        console.log(files)
    })
};

await list();
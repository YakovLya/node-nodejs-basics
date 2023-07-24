import fs from 'fs'
const path = './src/fs/files/fileToRemove.txt'

const remove = async () => {
    fs.unlink(path, (err) => {
        if (err)
            throw new Error('FS operation failed')
    })
};

await remove();
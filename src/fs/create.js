import fs from 'fs'
const path = './src/fs/files/fresh.txt'

const create = async () => {
    fs.access(path, (err) => {
        if (err) {
            fs.writeFile(path, 'I am fresh and young', (err) => {
                if (err)
                    throw new Error('FS operation failed')
            })
        } else 
            throw new Error('FS operation failed')
    })
};

await create();
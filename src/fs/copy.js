import fs from 'fs'
const path_from = './src/fs/files'
const path_to = './src/fs/files_copy'

const copy = async () => {
    fs.access(path_from, (err) => {
        if (err)
            throw new Error('FS operation failed')
        fs.access(path_to, (err) => {
            if (err) {
                fs.cp(path_from, path_to, { recursive: true }, (err) => {
                    if (err)
                        throw new Error('FS operation failed')
                })
            } else
                throw new Error('FS operation failed')
        })
    })
};

await copy();

import fs from 'fs'
const path = './src/fs/files/wrongFilename.txt'
const path_renamed = './src/fs/files/properFilename.md'

const rename = async () => {
    fs.access(path, (err) => {
        if (err)
            throw new Error('FS operation failed')
        fs.access(path_renamed, (err) => {
            if (err) {
                fs.rename(path, path_renamed, (err) => {
                    if (err)
                        throw new Error('FS operation failed')
                })
            } else
                throw new Error('FS operation failed')
        })
    })
};

await rename();
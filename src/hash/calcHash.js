import crypto from 'crypto'
import fs from 'fs'
const path = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    await fs.readFile(path, 'utf8', (err, data) => {
        if (err)
            throw new Error('Hash calc failed')
        console.log(crypto.createHash('sha256').update(data).digest('hex'))
    })
};

await calculateHash();
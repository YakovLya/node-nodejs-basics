import fs from 'fs'
import { createGunzip } from 'zlib'
const path_in = './src/zip/files/archive.gz'
const path_out = './src/zip/files/fileToCompress2.txt'

const decompress = async () => {
    const stream_in = fs.createReadStream(path_in)
    const unzip = createGunzip()
    const stream_out = fs.createWriteStream(path_out)
    stream_in.pipe(unzip).pipe(stream_out)
};

await decompress();
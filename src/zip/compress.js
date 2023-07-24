import fs from 'fs'
import { createGzip } from 'zlib'
const path_in = './src/zip/files/fileToCompress.txt'
const path_out = './src/zip/files/archive.gz'

const compress = async () => {
    const stream_in = fs.createReadStream(path_in, 'utf8')
    const zip = createGzip()
    const stream_out = fs.createWriteStream(path_out)
    stream_in.pipe(zip).pipe(stream_out)
};

await compress();
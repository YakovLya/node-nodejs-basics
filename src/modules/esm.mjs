import path from 'path'
import { release, version } from 'os'
import { fileURLToPath } from 'url'
import { createServer as createServerHttp } from 'http'
import * as json_a from './files/a.json' assert { type: 'json' }
import * as json_b from './files/b.json' assert { type: 'json' }
import './files/c.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const random = Math.random();

let unknownObject;

if (random > 0.5) 
    unknownObject = json_a
else
    unknownObject = json_b

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

const PORT = 3000;

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
}

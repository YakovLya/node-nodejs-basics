import child_process from 'child_process'
const path = './src/cp/files/script.js'

const spawnChildProcess = async (args) => {
    child_process.fork(path, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [ 150, 'arg2', 'testo', 'last_arg_almost', [1, 2, 3] ]);

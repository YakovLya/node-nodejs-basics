const parseEnv = () => {
    let out = []
    for (let key in process.env)
        if (key.startsWith('RSS_'))
            out.push(key + '=' + process.env[key])
    console.log(out.join('; '))
};

parseEnv();
const parseArgs = () => {
    let out = []
    process.argv.forEach((val, index, array) => {
        if (index >= 2 && index % 2 == 0)
            out.push(val.slice(2) + ' is ' + array[index + 1])
    })
    console.log(out.join(', '))
};

parseArgs();
let spreadFunc = (a='error', b, c, ...arguments) => {
    if (arguments.length < 2) {
        console.log('error');
        return
    };
    let arr = [a, b, c].join('-');
    let obj = {...arguments};
    
    console.log(arr);
    console.log(obj);
};

const data = [undefined, 2, 3, 4, 5, 'sd'];
spreadFunc(...data);

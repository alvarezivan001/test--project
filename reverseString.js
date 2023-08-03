function reverseString(str = '') {
    if(str == ''){return '';}

    let arr = str.split("");
    let newstr = '';
    let revarr = [];
    for(let i = arr.length; i > 0; i--)
    {
        revarr.push(arr[i-1]);
    }
    
    return newstr.concat(...revarr);
};

module.exports = reverseString;
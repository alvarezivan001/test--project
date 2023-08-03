function capitalize(str = '') {
    if(str == ''){return '';}
    let ch = '';
    ch = str.charAt(0);
    
    let chu = ch.toUpperCase();
    let newstr = str.replace(ch,chu);

    return newstr;
}

module.exports = capitalize;
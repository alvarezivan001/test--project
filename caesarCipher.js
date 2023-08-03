function caesarCipher(str = ''){
    let arr = str.split("");
    let newstr = '';


    for(let i = 0; i < arr.length; i++)
    {
        if(isZed(arr[i]))
        {
             newstr = newstr.concat(isZed(arr[i]));
        }
        else if(isLetter(arr[i]))
        {
            newstr = newstr.concat(isLetter(arr[i]));
        }
        else{
            newstr = newstr.concat(arr[i]);
        }
    }
    return newstr;
}

function isZed(char = ''){
    if(char == 'z')
    {
        return 'a';
    }
    else if(char == 'Z')
    {
        return 'A';
    }

    return false;
}

function isLetter(char = ''){
    let charAsc = char.charCodeAt(0);
    if(64 < charAsc && charAsc < 90)
    {
        charAsc++;
        return String.fromCharCode(charAsc);
    }
    else if(96 < charAsc && charAsc < 123)
    {
        charAsc++;
        return String.fromCharCode(charAsc);
    }

    return false;
}

module.exports = caesarCipher;
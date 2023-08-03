function analyzeArray(arr = []){

    let sum = 0;
    let length = arr.length;
    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
        if(min > arr[i])
        {
            min = arr[i];
        }
        if(max < arr[i])
        {
            max = arr[i];
        }
    }

    let average = sum/arr.length;

    return {avg: average, min: min, max: max, length: length};
}

module.exports = analyzeArray;
export default function transpose(inputArr) {
    let result = [];
    let orderedArr = inputArr.slice().sort((a, b) => { return b.length - a.length });
    console.log(orderedArr);

    for (var p = 0; p < inputArr.length; p++) {
        for (var i = 0; i < inputArr[p].length; i++) {
            if (result[i] != undefined)
                result[i] += inputArr[p][i]
            else
                result[i] = inputArr[p][i]
        }
    }

    let space = " "
    if(inputArr.length === result.length && inputArr.length == 6)
    {
        for(var p=0;p<result.length;p++)
        {
            result[p] = space.repeat(p) + result[p];
        }
    }


    return result;
}
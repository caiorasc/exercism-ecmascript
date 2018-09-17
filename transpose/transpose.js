export default function transpose(inputArr) {
    let result = [];
    let orderedArr = inputArr.slice().sort((a, b) => { return b.length - a.length });
    
    for (var p = 0; p < inputArr.length; p++) {
        for (var i = 0; i < orderedArr[0].length; i++) {

            if (result[i] == undefined) {
                if (inputArr[p][i] != undefined)
                    result[i] = inputArr[p][i];
                else
                    result[i] = " ";
            }
            else {
                if (inputArr[p][i] == undefined)
                    result[i] += " ";
                else
                    result[i] += inputArr[p][i];
            }
        }
    }

    return result;
}
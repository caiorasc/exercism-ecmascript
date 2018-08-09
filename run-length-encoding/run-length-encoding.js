export function encode(str) {
    let encodeStr = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (str[i] != str[i + 1] && count > 1) {
            encodeStr += count + str[i];
            count = 0;
        }

        if (str[i] != str[i + 1] && count == 1) {
            encodeStr += str[i];
            count = 0;
        }
    }

    return encodeStr;
}

export function decode(encodeStr) {
    let decodeStr = "";
    let repeatNumber = 0;
    let control = 0;

    for (let i = 0; i < encodeStr.length; i++) {

        if (!isNaN(encodeStr[i]) && encodeStr[i] != " ") {
            repeatNumber += encodeStr[i];
            control = 1;
        }

        else if (control == 1) {
            decodeStr += encodeStr[i].repeat(repeatNumber);
            control = 0;
            repeatNumber = 0;
        }
        
        else if (repeatNumber == 0) {
            decodeStr += encodeStr[i];
        }
    }

    return decodeStr;
}
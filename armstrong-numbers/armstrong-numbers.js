export function validate(input) {
    let strInput = input.toString();
    let toCalcInput = input;
    let result = 0;

    if (strInput.length == 2)
        return false;

    for (let i = 0; i < strInput.length; i++) {
        let digit = Math.trunc(toCalcInput) % 10;
        toCalcInput = toCalcInput / 10;

        if (toCalcInput > 0 && i == 0) {
            result += Math.pow(digit, strInput.length);

        } else {
            let x = Math.pow(digit, strInput.length)
            result += x;
        }
    }

    return (result == input) ? true : false;
}
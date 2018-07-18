class PhoneNumber {
    constructor(phoneNbr) {
        this.phoneNbr = phoneNbr;
    }

    number() {
        let result = null;
        let onlyNumbers = '';

        for (let i = 0; i < this.phoneNbr.length; i++) {
            if (isNaN(this.phoneNbr[i])) {
                let utfCode = this.phoneNbr[i].charCodeAt(0);
                if (utfCode !== 40 && utfCode !== 41 && utfCode !== 45 && utfCode !== 46) {
                    return result
                }
            } else {
                if (this.phoneNbr[i] !== ' ') {
                    onlyNumbers += this.phoneNbr[i];
                }
            }
        }

        if (onlyNumbers[0] !== 1 && onlyNumbers.length > 11)
            return result

        result = onlyNumbers;

        
        return result;
    }

}

export default PhoneNumber;
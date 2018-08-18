class Series {
    constructor(strDigits) {
        this.digits = this.getDigits(strDigits);
    }

    getDigits(str) {
        let digits = [];
        for (let i = 0; i < str.length; i++) {
            digits.push(parseInt(str[i]));
        }

        return digits;
    }
}

export default Series;
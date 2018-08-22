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

    slices(slicesNumber) {
        let digitsCopy = this.digits.slice(0, this.digits.length);
        let slicedArray = [];

        if (digitsCopy.length < slicesNumber) {
            throw new Error('Slice size is too big.');
        }

        for (let i = 0; i < this.digits.length; i++) {
            if (digitsCopy.length >= slicesNumber) {
                slicedArray.push(digitsCopy.slice(0, slicesNumber))
                digitsCopy.shift();

            }
        }

        return slicedArray;
    }
}

export default Series;
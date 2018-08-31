class Squares {
    constructor(number) {
        this.number = number;
        this.squareOfSums = this.squareOfSums();
        this.sumOfSquares = this.sumsOfsquare();
        this.difference = this.squareOfSums - this.sumOfSquares;
    }

    squareOfSums() {
        let number = this.number;
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return Math.pow(sum, 2);
    }

    sumsOfsquare() {
        let number = this.number;
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            sum += Math.pow(i, 2);
        }

        return sum;
    }
}

export default Squares;
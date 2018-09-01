class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    kind() {
        let uniqueList = new Set();
        let sideArr = [this.side1, this.side2, this.side3];
        this.hasInequality(this.side1, this.side2, this.side3);

        for (let i = 0; i < sideArr.length; i++) {
            if (sideArr[i] == 0) {
                throw new Error('undefined');
            }

            uniqueList.add(sideArr[i]);
        }

        switch (uniqueList.size) {
            case 1:
                return 'equilateral'
                break;

            case 2:
                return 'isosceles'
                break;

            case 3:
                return 'scalene'
                break;
        }
    }

    hasInequality(a, b, c) {
        if ((a + b) < c || (a + c < b) || (c + b) < a) {
            throw new Error('undefined');
        }
    }
}

export default Triangle;
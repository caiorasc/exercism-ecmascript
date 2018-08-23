class PerfectNumbers {
    classify(number) {
        let sum = 0;

        if (number <= 0)
            throw 'Classification is only possible for natural numbers.'

        for (let i = 0; i < number; i++) {
            let resultDivision = number % i;
            if (resultDivision == 0)
                sum += i;
        }

        if (sum == number)
            return 'perfect';

        if (sum > number)
            return 'abundant';

        return 'deficient';
    }
}

export default PerfectNumbers;
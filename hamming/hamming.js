class Hamming {
    compute(dnaStand1, dnaStand2) {
        let count = 0;

        if (dnaStand1.length != dnaStand2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        for (let i = 0; i < dnaStand1.length; i++) {
            if (dnaStand1[i] != dnaStand2[i]) {
                count++;
            }

        }

        return count;
    }
}

export default Hamming;
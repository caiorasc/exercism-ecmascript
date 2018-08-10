class Words {

    count(phrase) {
        let result = {};
        let phraseArr = phrase.toLowerCase().split(' ').sort();
        let count = 1;

        for (let i = 0; i < phraseArr.length; i++) {
            if (phraseArr[i] == phraseArr[i - 1]) {
                count++
                result[phraseArr[i]] = count;
            } else {
                result[phraseArr[i]] = 1;
                count = 1;
            }
        }

        return result;
    }
}

export default Words;
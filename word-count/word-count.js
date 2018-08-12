class Words {
    count(phrase) {
        let str = phrase.replace(/(\r\n|\n|\t|\r|\s{2,})/gm, ' ').trim();
        let result = {};
        let phraseArr = str.toLowerCase().split(' ').sort();
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
class Anagram {
    constructor(word) {
        this.word = word.toLowerCase().split('').sort();
    }

    matches(matchArray) {
        let matchArrayCopy = matchArray.slice();
        let result = [];

        for (let i = 0; i < matchArrayCopy.length; i++) {
            let element = matchArrayCopy[i].toLowerCase().split('').sort();

            let strElement = element.join('')
            let ordenateWord = this.word.join('');

            if (strElement == ordenateWord) {
                result.push(matchArray[i]);
            }
        }

        return result;
    }
}

export default Anagram;
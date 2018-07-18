class Anagram {
    constructor(word) {
        this.word = word;
        console.log(this.word.split('').sort());
    }

    matches(matchArray) {
        console.log(matchArray);
    }
}

export default Anagram;
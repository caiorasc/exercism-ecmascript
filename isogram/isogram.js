class Isogram {
    constructor(word) {
        this.word = word.toLowerCase();
        this.uniqueList = new Set();
    }

    isIsogram() {
        let onlyLetters = [];

        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i].match(/(?![×÷])[A-Za-zÀ-ÿ]/)) {
                onlyLetters.push(this.word[i]);
                this.uniqueList.add(this.word[i]);
            }
        }

        if (this.uniqueList.size == onlyLetters.length)
            return true

        return false;
    }
}

export default Isogram;
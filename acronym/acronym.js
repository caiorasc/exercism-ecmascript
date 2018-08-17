class Acronyms {
    static parse(str) {
        let toArr = str.split(' ');
        let acronym = [];

        for (let i = 0; i < toArr.length; i++) {
            let word = toArr[i];
            acronym.push(word[0]);

            for (let j = 1; j < word.length; j++) {
                if (/^[A-Z]+$/.test(word[j]) && /^[a-z]+$/.test(word[j-1]) || word[j-1] == '-') {
                    acronym.push(word[j]);
                }
            }
        }

        acronym = acronym.join('').toUpperCase();

        return acronym;
    }
    
}

export default Acronyms;
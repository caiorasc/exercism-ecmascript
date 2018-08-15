class Acronyms {
    static parse(str) {
        let toArr = str.split(' ');
        let acronym = [];

        for (let i = 0; i < toArr.length; i++) {
            if (toArr[i].includes('-')) {
                let subArr = toArr[i].split('-'); 
                subArr.forEach(word => {
                    acronym.push(word.substr(0,1));
                });
            } else {
                acronym.push(toArr[i].substr(0, 1));
            }
        }

        acronym = acronym.join('').toUpperCase();

        return acronym;
    }
    
}

export default Acronyms;
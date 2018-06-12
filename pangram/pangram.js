class Pangram {
    constructor(pangram) {
        this.pangramInterno = pangram;
    }

    isPangram() {
        this.pangramInterno = this.pangramInterno.replace('_', ' ');

        if (this.pangramInterno == '' || this.pangramInterno.match(/[A-Za-z][0-9][A-Za-z]/g)) { 
            // empty string OR pangram with numbers
            return false;
        }
        
        var alfabet = 'abcdefghijlmnopqrstuvxzykw';
        const characterAllowed = '".;-_\\ 1234567890abcdefghijlmnopqrstuvxzykwABCDEFGHIJLMNOPQRSTUVXZYKWñöäüß';
        for (let i=0; i<this.pangramInterno.length; i++) {           
            let a = this.pangramInterno[i];
            if (characterAllowed.indexOf(a) < 0) {
                return false;
            }
            var indexAlfabet = alfabet.indexOf(a.toLowerCase());
            if (indexAlfabet >= 0) {
                alfabet = alfabet.slice(0, indexAlfabet) + alfabet.slice(indexAlfabet + 1); 
            }
        }

        return alfabet === '';
    }
}
export default Pangram;
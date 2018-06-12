class Cipher {
    constructor(key) {

        if (key == '')
            throw new Error('Bad key');

        if (/\d/.test(key) || /[A-Z]/.test(key))
            throw new Error('Bad key');

        if (key == null)
            this.key = "aaaaaaaaaa";
        else
            this.key = key;
    }

    encode(value) {
        var ret = '';
        for(var letter in value){
            var newLetter = 
                value.charCodeAt(letter) +
                this.key.charCodeAt(letter);
                if (newLetter < 97) {
                console.log(newLetter);
        newLetter = this.key.charCodeAt(this.key.length-1) 
                - newLetter;
            }
        newLetter = newLetter - 97;

        if (newLetter > 122)
        {
            newLetter = value.charCodeAt(letter) -
                (newLetter - 122);
        }   newLetter = value.charCode

                ret += String.fromCharCode(newLetter);
                // ret += newLetter.toString();
        }
        return ret;
    }

    decode(value) {
        var ret = '';
        for(var letter in value){
            var newLetter = 
                value.charCodeAt(letter) - 
                this.key.charCodeAt(letter) + 97;
            ret += String.fromCharCode(newLetter);
        }
        return ret;
    }
}

export default Cipher;
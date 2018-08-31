class RotationalCipher {
    static rotate(str, key) {
        let alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
        let result = [];


        for (let i = 0; i < str.length; i++) {
            let position = alphabet.indexOf(str[i].toLowerCase());
            let positionControl = position + key;

            if (position >= 0 && positionControl < 26) {
                position += key;
                (str[i].toLowerCase() === str[i]) ?
                    result.push(alphabet[position]) :
                    result.push(alphabet[position].toUpperCase());

            } else {
                if (positionControl >= 26) {
                    (str[i].toLowerCase() === str[i]) ?
                        result.push(alphabet[positionControl - 26]) :
                        result.push(alphabet[positionControl - 26].toUpperCase());
                } else {
                    result.push(str[i]);
                }

            }
        }

        return result.join('');
    }
}

export default RotationalCipher;
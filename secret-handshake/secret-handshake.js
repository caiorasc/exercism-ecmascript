class SecretHandshake {
    constructor(hexCode) {
        this.strCode = (hexCode).toString(2);

        if (isNaN(parseFloat(this.strCode))) {
            throw new Error("Handshake must be a number");
        }
    }

    commands() {
        console.log(this.strCode);
        let commands = [];
        let aux = this.strCode;

        for (let i = aux.length; i > 0; i--) {
            let checkNumber = aux.substr(i - 1, 1);

            if (checkNumber == 1 && i == aux.length) {
                commands.push('wink');
            }

            if (checkNumber == 1 && i == aux.length - 1) {
                commands.push('double blink');
            }

            if (checkNumber == 1 && i == aux.length - 2) {
                commands.push('close your eyes');
            }

            if (checkNumber == 1 && i == aux.length - 3) {
                commands.push('jump');
            }
        }
        
        if (parseInt(aux) >= 16) {
            commands.reverse();
        }

        
        return commands;
    }
}

export default SecretHandshake;

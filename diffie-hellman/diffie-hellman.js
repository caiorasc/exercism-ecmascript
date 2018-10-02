class DiffieHellman {
    constructor(p, g) {
        this.primeNumberG = this.validate(g);
        this.primeNumberP = this.validate(p);
    }

    validate(argument) {
        if (argument === 0) {
            throw new Error();
        }

        for (let i = 2; i < argument; i++) {
            let result = argument % i;
            if (result == 0) {
                throw new Error();
            }
        }

        return argument;
    }

    getPublicKeyFromPrivateKey(privateKey) {
        if (privateKey <= 1 || privateKey >= this.primeNumberP) {
            throw new Error();
        }

        return Math.pow(this.primeNumberG, privateKey) % this.primeNumberP;
    }

    getSharedSecret(privateKey, publicKey) {
        return Math.pow(publicKey, privateKey) % this.primeNumberP;
    }
}

export default DiffieHellman;
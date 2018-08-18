class Raindrops {
    convert(number) {
        let factors = [];

        for (let i = 1; i <= 10; i++) {
            if (number % i == 0) {
                switch (i) {
                    case 3:
                        factors.push("Pling");
                        break;

                    case 5:
                        factors.push("Plang");
                        break;

                    case 7:
                        factors.push("Plong");
                        break;
                }
            }
        }

        if (factors.length > 0) {
            return factors.join('');
        }

        return number.toString()
    }
}

export default Raindrops;
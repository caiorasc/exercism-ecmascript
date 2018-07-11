class Robot {
    constructor(){
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        this.name = this.robotName();
    }

    robotName() {
        let lettersIndex = this.randomLetter();
        let robotName = this.letters[lettersIndex[0]] + this.letters[lettersIndex[1]];

        return robotName + this.randomNumber();
    }

    reset() {
        this.name = this.robotName();
        
        return this.name
    }

    randomLetter() {
        let numbers = [];
        let firstNumber = Math.floor(Math.random() * Math.floor(26));
        let secondNumber = Math.floor(Math.random() * Math.floor(26));

        while (firstNumber == secondNumber) {
            secondNumber = Math.floor(Math.random() * Math.floor(26));
        }

        numbers.push(firstNumber, secondNumber);

        return numbers;
    }

    randomNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100);
    }

}

export default Robot;
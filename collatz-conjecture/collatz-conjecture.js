export const steps = (number) => {
    let result = number;
    let steps = 0;

    if (result < 1) {
        throw new Error('Only positive numbers are allowed');
    }

    while (result > 1) {
        result = (result % 2 == 0) ? result / 2 : 3 * result + 1;
        steps++;

    }

    return steps;
}
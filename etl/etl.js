export default function transform(scores) {
    let newScores = {};
    let oldArrayValues = Object.values(scores);
    let oldArrayKeys = Object.keys(scores);

    for (let i = 0; i < oldArrayValues.length; i++) {
        for (let j = 0; j < oldArrayValues[i].length; j++) {
            newScores[oldArrayValues[i][j].toLowerCase()] = parseInt(oldArrayKeys[i]);
        }

    }

    return newScores;
}
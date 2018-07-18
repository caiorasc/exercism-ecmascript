export default function twoFer(name) {
    let resultStr = (name == '') ? `One for you, one for me.` : `One for ${name}, one for me.`;

    return resultStr;
}
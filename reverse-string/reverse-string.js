export default function Reverse(str) {
    let strArray = str.split('').reverse();
    let reverseStr = strArray.join('');
    
    return reverseStr;
}
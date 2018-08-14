export default function bracket(str) {
    let matchClose = [')', ']', '}'];
    let matchOpen = ['{', '[', '('];
    let stack = [];
    let controlClosedBrackets = [];

    for (let i = 0; i < str.length; i++) {
        let openBracket = '';

        if (matchOpen.includes(str[i])) {
            stack.push(str[i]);
        }

        if (matchClose.includes(str[i])) {
            openBracket = getOpenBracket(str[i]);
            controlClosedBrackets.push(str[i]);
        }

        if (openBracket == stack[stack.length - 1]) {
            stack.pop();
            controlClosedBrackets.pop();
        }
    }

    if (stack.length == 0 && controlClosedBrackets.length == 0)
        return true;

    return false;
}

function getOpenBracket(closedBracket) {
    switch (closedBracket) {
        case '}':
            return '{';
            break;

        case ')':
            return '(';
            break;

        case ']':
            return '[';
            break;
    }
}
// Resolver la operación matemática
export function solveOperation(oper) {
    let charsValidated = getCharsValidated(oper);

    if (charsValidated.includes('*') || charsValidated.includes('/')) {

        while (charsValidated.includes('*') || charsValidated.includes('/')) {
            let solved = false;
            let index;
            charsValidated = charsValidated.map((item, i) => {
                if (item === '*' && !solved) {
                    index = i;
                    solved = true;
                    // console.log(item[i - 1], item[i + 1]);
                    return multiply(charsValidated[i - 1], charsValidated[i + 1]);
                } else if (item === '/' && !solved) {
                    index = i;
                    solved = true;
                    // console.log(divide(item[i - 1], item[i + 1]));
                    return divide(charsValidated[i - 1], charsValidated[i + 1]);
                } else {
                    return item;
                }
            });
            charsValidated[index - 1] = '';
            charsValidated[index + 1] = '';
            charsValidated = charsValidated.filter(item => item !== '');
        }
        // console.log(charsValidated);
    }
    if (charsValidated.includes('+') || charsValidated.includes('-')) {

        while (charsValidated.includes('+') || charsValidated.includes('-')) {
            let solved = false;
            let index;
            charsValidated = charsValidated.map((item, i) => {
                if (item === '+' && !solved) {
                    index = i;
                    solved = true;
                    // console.log(item[i - 1], item[i + 1]);
                    return add(charsValidated[i - 1], charsValidated[i + 1]);
                } else if (item === '-' && !solved) {
                    index = i;
                    solved = true;
                    // console.log(divide(item[i - 1], item[i + 1]));
                    return substract(charsValidated[i - 1], charsValidated[i + 1]);
                } else {
                    return item;
                }
            });
            charsValidated[index - 1] = '';
            charsValidated[index + 1] = '';
            charsValidated = charsValidated.filter(item => item !== '');
        }
    }
    return charsValidated[0];
}

function isSymbol(data) {
    if (isNaN(data) && data !== '.') {
        return true;
    }
    return false;
}

function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

// Comprobar si la operación matemática es válida
export function isNotValid(oper) {
    const charsValidated = getCharsValidated(oper);
    let isNotValid;
    
    if (isSymbol(charsValidated[0]) || isSymbol(charsValidated[charsValidated.length - 1])) {
        isNotValid = true;
    } else {
        isNotValid = false;
    }
    
    return isNotValid;
}

function getCharsValidated(oper) {
    const chars = oper.split('');
    let charsValidated = [];

    chars.forEach(item => {
        if (isSymbol(item)) {
            charsValidated.push(item);
            return;
        }
        const i = charsValidated.length - 1;

        if (i && isSymbol(charsValidated[i])) {
            charsValidated.push(item);
            return;
        }
        charsValidated[i] += item;
    });
    return charsValidated;
}
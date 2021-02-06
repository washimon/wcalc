export function solveOperation(oper) {
    const chars = oper.trim().split('');
    const charsValidated = [];
    chars.forEach(item => {
        try {
            parseInt(item);
            console.log(item, 'se pudo');
        } catch(error) {
            
            console.log(item, 'no se pudo');
        }
    });
    console.log();
}

function sum() {
    
}
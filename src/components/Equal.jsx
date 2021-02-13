import React from 'react';
import { solveOperation, isNotValid } from '../helpers';

const Equal = ({ val, operation, setOperation, setResult }) => {
    
    function processOperation() {
        if (isNotValid(operation)) {
            console.log('incorrecto');
            return;
        }
        const prevOper = operation;
        setOperation(data => data + val);
        const res = solveOperation(operation);
        setOperation(String(res));
        setResult(prevOper.concat("=", String(res)));
    }
    
    return (
        <div
            onClick={processOperation}
            className="btn"
        >
            <span>{val}</span>
        </div>
    );
}

export default Equal;

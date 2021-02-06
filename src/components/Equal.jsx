import React from 'react';
import { solveOperation } from '../helpers';

const Equal = ({ val, operation, setOperation, setResult }) => {
    
    function processOperation() {
        setOperation(data => data + val);
        solveOperation(operation);
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

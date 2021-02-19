import React from 'react';
import PropTypes from 'prop-types';
import { solveOperation, isNotValid } from '../helpers';

const Equal = ({ val, operation, setOperation, setResult }) => {
    
    function processOperation() {
        if (isNotValid(operation)) {
            // console.log('incorrecto');
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

Equal.propTypes = {
    val: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    setOperation: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired
}

export default Equal;

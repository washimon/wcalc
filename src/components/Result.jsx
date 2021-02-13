import React, { useEffect, useRef } from 'react';

const Result = ({ operation, setOperation, result }) => {

    const inpMain = useRef();
    useEffect(() => {
        inpMain.current.focus();
    }, [operation]);

    function handleChange(e) {
        setOperation(e.target.value);
    }

    return (
        <div
            className="result"
        >
            <div
                className="response"
            >{result}</div>
            <input
                ref={inpMain}
                onChange={handleChange}
                className="inp-operation"
                type="text"
                value={operation}
            />
        </div>
    );
}

export default Result;

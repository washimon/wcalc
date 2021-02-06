import React, { useEffect, useRef } from 'react';

const Result = ({ operation, setOperation }) => {

    const inpMain = useRef();
    useEffect(() => {
        inpMain.current.focus();
    }, [operation]);

    return (
        <div
        className="result"
        >
            <div
                className="response"
                >d</div>
            <input
                ref={inpMain}
                onChange={(e) => setOperation(e.target.value)}
                className="inp-operation"
                type="text"
                value={operation}
            />
        </div>
    );
}

export default Result;

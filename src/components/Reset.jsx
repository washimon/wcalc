import React from 'react';

const Reset = ({ setOperation }) => {
    return (
        <div
            onClick={() => setOperation("")}
            className="btn btn-2"
        >
            <span>C</span>
        </div>
    );
}

export default Reset;
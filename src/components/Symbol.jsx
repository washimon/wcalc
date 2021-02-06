import React from 'react';

const Symbol = ({ val, setOperation }) => {
    
    if (val === '=') {
        
    }
    
    function write() {
        setOperation(data => data + val);
    }
    
    return (
        <div
            onClick={write}
            className="btn"
        >
            <span>{val}</span>
        </div>
    );
}

export default Symbol;
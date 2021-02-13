import React from 'react';

const Symbol = ({ val, setOperation }) => {

    let icon;
    if (val === 'undo') {
        icon = <i className="fas fa-undo"></i>;
    }
    function write() {
        val !== 'undo' 
            ? setOperation(data => data + val)
            : setOperation(data => {
                return data.length === 0
                    ? data
                    : data.substring(0, data.length - 1);
            });
    }

    return (
        <div
            onClick={write}
            className="btn"
        >   
            {!icon
            ? <span>{val}</span>
            : <span>{icon}</span>}
        </div>
    );
}

export default Symbol;
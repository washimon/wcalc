import React from 'react';

const Num = ({ val, setOperation }) => {

    let clase = "btn";
    if (val === "0") {
        clase = "btn btn-2";
    }

    function write() {
        setOperation(data => data + val);
    }

    return (
        <div
            onClick={write}
            className={clase}
        >
            <span>{val}</span>
        </div>
    );
}

export default Num;
import React from 'react';
import PropTypes from 'prop-types';

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

Num.propTypes = {
    val: PropTypes.string.isRequired,
    setOperation: PropTypes.func.isRequired
}

export default Num;
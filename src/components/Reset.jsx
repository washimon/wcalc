import React from 'react';
import PropTypes from 'prop-types';

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

Reset.propTypes = {
    setOperation: PropTypes.func.isRequired
}

export default Reset;
import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ result }) => {
    const items = result.split('=');
    const oper = items[0]+'=';
    const outcome = items[1];
    return (
        <div className="item">
            <p>{oper}</p>
            <p>{outcome}</p>
        </div>
    );
}

ResultItem.propTypes = {
    result: PropTypes.string.isRequired
}

export default ResultItem;

import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ResultItem from './ResultItem';

const Record = ({ record }) => {

    const listResults = record.map(item => {
        const id = nanoid(); 
        return <ResultItem
            result={item}
            key={id}
        />
    });

    return (
        <div className="record">
            <h2>Historial</h2>
            <ul>{listResults}</ul>
        </div>
    );
}

Record.propTypes = {
    record: PropTypes.array.isRequired
}

export default Record;

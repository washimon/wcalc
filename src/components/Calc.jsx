import React from 'react';
import PropTypes from 'prop-types';
import Result from '../components/Result';
import Reset from '../components/Reset';
import Symbol from '../components/Symbol';
import Num from '../components/Num';
import Equal from '../components/Equal';

const Calc = ({ operation, setOperation, result, setResult}) => {
    return (
        <div className="wraper">
            <div className="container-main">
                <div className="row lg-row">
                    <Result
                        operation={operation}
                        setOperation={setOperation}
                        result={result}
                    />
                </div>
                <div className="row">
                    <Reset
                        setOperation={setOperation}
                    />
                    <Symbol
                        setOperation={setOperation}
                        val="undo"
                    />
                    <Symbol
                        setOperation={setOperation}
                        val="/"
                    />
                </div>
                <div className="row">
                    <Num
                        setOperation={setOperation}
                        val="7"
                    />
                    <Num
                        setOperation={setOperation}
                        val="8"
                    />
                    <Num
                        setOperation={setOperation}
                        val="9"
                    />
                    <Symbol
                        setOperation={setOperation}
                        val="x"
                    />
                </div>
                <div className="row">
                    <Num
                        setOperation={setOperation}
                        val="4"
                    />
                    <Num
                        setOperation={setOperation}
                        val="5"
                    />
                    <Num
                        setOperation={setOperation}
                        val="6"
                    />
                    <Symbol
                        setOperation={setOperation}
                        val="-"
                    />
                </div>
                <div className="row">
                    <Num
                        setOperation={setOperation}
                        val="1"
                    />
                    <Num
                        setOperation={setOperation}
                        val="2"
                    />
                    <Num
                        setOperation={setOperation}
                        val="3"
                    />
                    <Symbol
                        setOperation={setOperation}
                        val="+"
                    />
                </div>
                <div className="row">
                    <Num
                        setOperation={setOperation}
                        val="0"
                    />
                    <Num
                        setOperation={setOperation}
                        val="."
                    />
                    <Equal
                        operation={operation}
                        setOperation={setOperation}
                        setResult={setResult}
                        val="="
                    />
                </div>
            </div>
        </div>
    );
}

Calc.propTypes = {
    operation: PropTypes.string.isRequired,
    setOperation: PropTypes.func.isRequired,
    result: PropTypes.string.isRequired,
    setResult: PropTypes.func.isRequired,
}

export default Calc;

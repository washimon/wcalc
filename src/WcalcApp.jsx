import React, { useState } from 'react';
import Num from './components/Num';
import Symbol from './components/Symbol';
import Reset from './components/Reset';
import Result from './components/Result';
import Equal from './components/Equal';

const WcalcApp = () => {

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="container">
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
              val="*"
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
    </div>
  );
}

export default WcalcApp;

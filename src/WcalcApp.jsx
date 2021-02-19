import React, { useState, useEffect, Fragment } from 'react';
import Calc from './components/Calc';
import Record from './components/Record';
import Footer from './components/Footer';

const WcalcApp = () => {

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [record, setRecord] = useState([]);

  useEffect(() => {
    if (result !== "") {
      // console.log('effect realizado');
      setRecord([result, ...record]);
    }
  }, [result]);

  return (
    <Fragment>
      <div className="container">
        <h1>Wcalc</h1>
        <Calc
          operation={operation}
          setOperation={setOperation}
          result={result}
          setResult={setResult}
        />
        <Record
          record={record}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default WcalcApp;

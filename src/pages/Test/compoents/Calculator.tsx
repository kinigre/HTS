import { useState } from 'react';
import Pad from './Pad';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const inputKey = (key: string) => {
    if (key === '=') {
      // eslint-disable-next-line no-eval
      setExpression(eval(expression));
    } else if (key === 'C') {
      setExpression('');
    } else {
      setExpression(expression + key);
    }
  };

  return (
    <>
      <input type="text" value={expression} />
      <section>
        <Pad keyName="7" callback={inputKey} />
        <Pad keyName="8" callback={inputKey} />
        <Pad keyName="9" callback={inputKey} />
      </section>

      <section>
        <Pad keyName="4" callback={inputKey} />
        <Pad keyName="5" callback={inputKey} />
        <Pad keyName="6" callback={inputKey} />
      </section>

      <section>
        <Pad keyName="1" callback={inputKey} />
        <Pad keyName="2" callback={inputKey} />
        <Pad keyName="3" callback={inputKey} />
      </section>

      <section>
        <Pad keyName="0" callback={inputKey} />
        <Pad keyName="+" callback={inputKey} />
        <Pad keyName="-" callback={inputKey} />
      </section>

      <section>
        <Pad keyName="*" callback={inputKey} />
        <Pad keyName="/" callback={inputKey} />
        <Pad keyName="=" callback={inputKey} />
        <Pad keyName="C" callback={inputKey} />
      </section>
    </>
  );
};

export default Calculator;

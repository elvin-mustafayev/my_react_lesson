import React, { useContext } from 'react'
import { myCounterContext} from '../Context/CounterContext';


function Counter() {

   const { count, increment, decrement } = useContext(myCounterContext);
    console.log(count)

    return (
      <div>
        <h2>{count}</h2>
        <button type="button" onClick={increment}>
          Increment
        </button>
        <br /> <br />
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    );
}
export default Counter;
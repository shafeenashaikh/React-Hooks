import React from "react";
import useCounter from "../CustomHook/useCounter";

function Counter1(){

   const[count, increment, decrement, reset] = useCounter(0, 1)
    return(
        <div>
            <h2>count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter1;
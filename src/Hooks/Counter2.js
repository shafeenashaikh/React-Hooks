import React from "react";
import useCounter from "../CustomHook/useCounter";

function Counter2(){

    const [count, increment, decrement, reset] = useCounter(10, 10)
    return(
        <div>
            <h2>count - {count}</h2>
            <button onClick={increment}>INcrement</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter2;
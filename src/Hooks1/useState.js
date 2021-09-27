import React, { useState } from 'react';

function UseState(){

    const[count,setCount] = useState(4)

    function decrement(){
        setCount(prevCount => prevCount+1)
    }
  

    function increament(){
        setCount(prevCount => prevCount+1)
    }
  
    return(
        <div>
            <button onClick={decrement} style={{  width: "50px",height: "50px"}}>-</button>&nbsp;

            <span style={{fontSize: "30px"}}>{count}</span>&nbsp;
            
            <button onClick={increament} style={{  width: "50px",height: "50px"}}>+</button>&nbsp;
        </div>
    )
}
export default UseState
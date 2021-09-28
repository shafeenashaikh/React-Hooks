import React, { useRef, useState } from 'react';

function UseRef(){
    
    const[name,setName]=useState('')
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>My name is {name}</h1>
            <button onClick={focus}>Focus</button>
        </div>
    )
}
export default UseRef
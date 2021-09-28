import React, { useReducer} from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count - 1}
        case ACTIONS.DECREMENT:
            return {count: state.count + 1}
        default:
            return state
    }
}

function UseReducer(){

    const [state, dispatch] = useReducer(reducer, {count: 0})

    function decrement(){
        dispatch({type: ACTIONS.INCREMENT})
    }
  
    function increament(){
        dispatch({type: ACTIONS.DECREMENT})
    }
  
    return(
        <div>
            <button onClick={decrement} style={{  width: "50px",height: "50px"}}>-</button>&nbsp;

            <span style={{fontSize: "30px"}}>{state.count}</span>&nbsp;
            
            <button onClick={increament} style={{  width: "50px",height: "50px"}}>+</button>&nbsp;
        </div>
    )
}
export default UseReducer
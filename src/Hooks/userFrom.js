import React from "react";
import useInput from "../CustomHook/useInput";

function UserForm(){

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
   
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input 
                    value={firstName}
                    {...bindFirstName}
                    type="text"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                    value={lastName}
                    {...bindLastName}
                    type="text"/>
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default UserForm;
import React, { useEffect, useState } from "react";

function UseEffect(){


    const[resourceType,setResourceType] = useState('posts')
    const [items,setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType])

    return(
        <div>
            <button style={{  width: "100px",height: "50px", fontSize:"20px"}} onClick={()=>setResourceType('posts')}>Posts</button>

            <button style={{  width: "100px",height: "50px", fontSize:"20px"}} onClick={()=>setResourceType('users')}>Users</button>

            <button style={{  width: "110px",height: "50px", fontSize:"20px"}} onClick={()=>setResourceType('comments')}>Comments</button>

            <h2>{resourceType}</h2>
            {
                items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }
        </div>
    )
}
export default UseEffect
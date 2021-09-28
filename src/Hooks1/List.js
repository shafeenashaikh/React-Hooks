import React, { useEffect, useState } from "react";
 export default function List ({getItems}){
     const [items,setItem] =useState([])

     useEffect(()=>{
         setItem(getItems())
         console.log('updating items')
     },[getItems])
     return items.map(item => <div key={item}>{item}</div>)
 }
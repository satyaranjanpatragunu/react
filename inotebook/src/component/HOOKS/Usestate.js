import React, { useEffect, useState } from 'react'

export const Hooks = () => {
    const[count,setCount]=useState(0);
    const[otherCount,setOtherCount]=useState(5);

    useEffect(()=>{
      document.title=`${otherCount} on new message`//use effect with no dependencies we can run anywhere
    },[otherCount])// useeffect with Empty array
  let  satya=()=>{
    setCount(
        count+1
      );
   }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={satya}>grow</button>
        <button onClick={()=>{setOtherCount(otherCount+5)}}>grow by 5</button>

    </div>
  )
}

import React,{useState} from 'react'
export default function Growup(props) {
    const [satya,setSatya]=useState(1);
     
    const handleTogrowup=()=>{
     setSatya(satya+1);
    // console.log(satya);

    
    }  
    return(
       
        <>
      <div className='container'>
       <p>{satya}</p>
    <button type="button" className="btn btn-primary mx-1" onClick={handleTogrowup}>Convert To grow</button>

      </div>
       
        
        </>
    )


}
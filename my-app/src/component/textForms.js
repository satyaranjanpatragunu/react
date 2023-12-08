import React,{useState} from 'react'
export default function TextForms(props) {
   const handleOnclick=()=>{
  
 //  console.log("button was clicked")
   let newText=text.toUpperCase();
   setText(newText);
   return props.ShowAlert('success','converted to Upper Case');
    }
    const handleToUpperCase =()=>{
        let newText2=text.toLowerCase();
        setText(newText2);
    props.ShowAlert('success','converted to Lower Case');
    
    }
   const handleToclear=()=>{
    setText("");
   return props.ShowAlert('success','All cleared');

   }
    const handelOnChng=(event)=>{
       // console.log('gggggg')
        setText(event.target.value)
    }
    const handleCopy=()=>{
      var text=document.getElementById('my-box');
      text.select();
      navigator.clipboard.writeText(text.value);
   return props.ShowAlert('success','All text are copied');

    }
    const handelExtraspace=()=>{
      const newText=text.split(/[ ]+/);
     setText( newText.join([" "]));
   return props.ShowAlert('success','Extra spaces has been ommited');

    }
const[text,setText]=useState('satya enter the text');//here text is a variable and inside the use state are the value assign to it

  return (
  <>
<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
  <h1>{props.heading}</h1>
  <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="my-box" value={text} onChange={handelOnChng} rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={handleOnclick}>Convert To upper case</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleToUpperCase}>Convert To lower case</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleToclear}>Clear</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
<button type="button" className="btn btn-primary mx-1" onClick={handelExtraspace}>Remove Space</button>



<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h1>Enter your text</h1>
   <p>{text.split(" ").length===1 ? 0:text.split(" ").length} words and {text.length}character</p> 
   <p>the time need to re is {0.08*text.split(" ").length}</p>
   <h1>PREVIEW</h1>
   <p>{text.length>0 ? text:'enter text above'}</p>
</div>
 </>
  )
}

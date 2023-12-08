import { useState } from 'react';
import './App.css';
// import About from './component/About';
// import Growup from './component/button';
import OrgNavBar from './component/orgNavBar';
import TextForms from './component/textForms';
import Alert from './component/alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [Mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const ShowAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })
    setTimeout(()=>{
      setAlert(null);
      },3000);
  }
  
  const toggleMode=()=>{
  if(Mode==='light'){
    setMode('dark')
  document.body.style.backgroundColor='#363391';
  ShowAlert("success","DARK MODE IS ENABLED");
  document.title='Textutil-Darkmode';
  // setInterval(() => {
  //   document.title=' INstall-Textutil-is-Awasome';
  // }, 2000);
  }
  else{
    setMode('light')
  document.body.style.backgroundColor='white';
  ShowAlert("success","LIGHT MODE IS ENABLED");
  document.title='Textutil-Lightkmode';
  // setInterval(() => {
  //   document.title='Textutil-is-Awasome';
  // }, 1500);
 
  }
  
  }

  return (
    <>
    
   {/* <BrowserRouter> */}
   <OrgNavBar title="Title Utils"  textAbout="About" mode={Mode} button={toggleMode}/>
       <Alert alert={alert}/>
        <div className="container my-3" mode={Mode}>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route */}
              {/* exact path="/home" element={ */}
                 <TextForms heading="Enter the text satya" ShowAlert={ShowAlert}  mode={Mode}/> 
                {/* }> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
 {/* <Growup />     */}
    </>
  );
}

export default App;

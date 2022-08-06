

import React, { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm"; 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3500);
  }
  
  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#41424C';
      showAlert("Dark mode has been enabled!","success");
      document.title ="WordAnalyzer - Darkmode" ;
      setInterval(() => {
        document.title ="WordAnalyzer" ;
      }, 2000);
      setInterval(() => {
        document.title ="MADE BY JUNAID KHAN" ;
      }, 1600);
    }
   else{
     setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
      document.title ="WordAnalyzer - Home" ;
   }
     
  }
  return (
    <>
      <Navbar title="Word Analyzer By Junaid" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="To Analyze Write Text Down Below :" mode={mode}/> 
      </div>
    </>
  );
}

export default App;

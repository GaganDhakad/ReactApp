import './App.css';
import React, { useState } from 'react'

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert('null')
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "grey";
      showAlert(": Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white";
      showAlert(": Light Mode has been Enabled","success");
    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About ReactCourse"/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the Text to Analyze"/>} />
  </Routes> */}
  <TextForm showAlert={showAlert} mode={mode} heading="Enter the Text to Analyze"/>        
  </div>
  {/* </BrowserRouter> */}
  </>
  );
}

export default App;
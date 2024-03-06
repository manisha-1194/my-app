 
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; 
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <> 
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"> 
       
      
      <Routes>
        <Route exact path="/" element={<TextForm healine="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}>  
        </Route>
        <Route exact path="/about" element={<About/>}>  
        </Route>
      </Routes>

      </div>
     
    </BrowserRouter> 
    </>
  );
}

export default App;

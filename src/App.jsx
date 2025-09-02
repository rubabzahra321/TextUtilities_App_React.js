
import AboutText from './AboutText';
import TextNavBar from './TextNavBar';
import TextApp from './TextApp';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  const [mode, setmode] = useState('light')

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
    }
    else {
      setmode('light')
    }
  }
  return (
    <>
     

      
        <TextNavBar mode={mode} togglemode={togglemode} />   {/* Always visible */}
        <Routes>
          <Route path="/" element={<TextApp mode={mode} togglemode={togglemode} />} />
          <Route path="/about" element={<AboutText mode={mode} />} />
        </Routes>
      

     




    </>
  );
}


export default App;
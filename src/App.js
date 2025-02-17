import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setModes] = useState('Light');
  const [alert, setAlert] = useState(null);
 
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const ToggleMode = () => {
    if (Mode === 'Light') {
      setModes('dark');
      document.body.style.backgroundColor = "rgb(128 128 128)";
      ShowAlert("Color has been Changed!!", "success");
      document.title = "TextEditor - Dark Mode";
    } else {
      setModes('Light');
      document.body.style.backgroundColor = "white";
      ShowAlert("Color has been Reverted!!", "success");
      document.title = "TextEditor - Light Mode";
    }
  };
  
  return (
    <>
      <Router>
        <Navbar mode={Mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextInput ShowAlert={ShowAlert} heading="TextEditor" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="App">

      
        <Button variant = "contained" color = "primary" onClick = {handleOpen}>
          Signup
        </Button>
        <ModalDialog open = {open} handleClose = {handleClose}/>
      


      <Header />

    </div>
  );
}

export default App;
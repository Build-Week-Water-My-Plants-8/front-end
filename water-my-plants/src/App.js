import React from 'react';
import './App.css';
//import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // }
  return (
    <div className="App">

      
        {/* <Button variant = "contained" color = "primary" onClick = {handleOpen}>
          Signup
        </Button>
        <ModalDialog open = {open} handleClose = {handleClose}/> */}
      
      <Header />
      
      <Home />
      <Router>
        <Routes>
          <Route path='/login' component={Login}/>
        </Routes>
        
      </Router>
      

      <Footer />

    </div>
  );
}

export default App;
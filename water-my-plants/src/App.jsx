import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';
import MyPlantList from './components/MyPlantList';
import SignUp from './components/SignUp';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';

import Logout from './components/Logout';
import AddPlantForm from './components/AddPlantForm';



function App() {

  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
      
      <Header token={token} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />}/>
          <Route path={'/login'} element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path={'/signup'} element={<SignUp />} />

          <Route path={'/plants'} element={
            <PrivateRoute>
              <MyPlantList/>
            </PrivateRoute>
          } />  
          <Route path={'/logout'} element={<Logout />} />
          <Route path={'/add'} element={
            <PrivateRoute>
              <AddPlantForm />
            </PrivateRoute>
          } />

          <Route path={'/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
    
  );
}

export default App;
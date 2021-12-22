import React from 'react';
import './App.css';
//import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';
import MyPlantList from './components/MyPlantList';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import MyPlant from './components/MyPlant';


function App() {
  
  return (
    <div className="App">
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />}/>
          <Route path={'/login'} element={<Login />}/>


          <Route path={'/profile'} element={<Profile />}/>

          
          <Route path={'/plants'} 
            element={
            <PrivateRoute>
              <MyPlantList/>
            </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
    
  );
}

export default App;
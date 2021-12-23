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
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
// import PrivateRoute from './components/PrivateRoute';
// import MyPlant from './components/MyPlant';
import Logout from './components/Logout';

function App() {
  
  return (
    <div className="App">
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/signup'} element={<SignUp/>}/>
          {/* delete route path to MyPlantList when private route is inserted -Lia */}
          <Route path={'/plants'} element={<MyPlantList />} /> 
          <Route path={'/logout'} element={<Logout />} />
          <Route path={'/profile'} element={<Profile />}/>

          {/* uncomment this when Kayla is done with the conditional rendering on the navbar links -Lia */}
          {/* <Route path={'/plants'} 
            element={
            <PrivateRoute>
              <MyPlantList/>
            </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
    
  );
}

export default App;
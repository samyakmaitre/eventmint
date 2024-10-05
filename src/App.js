import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import NavBar from './components/NavBar'; 
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Signup from './pages/AuthGuard/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/AuthGuard/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const App=()=> {
  return (
    <>
    <ToastContainer />
      <div className="App">
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/user/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;

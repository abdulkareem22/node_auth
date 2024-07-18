import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../components/Register/index';
import Login from '../components/Login/index';
import Forget from '../components/ForgetPassword/index';
import Reset from '../components/ResetPassword/index';
import Home from '../components/Home/index';

function AppRouter() {
    return (
        <>
           <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/forget-password' element={<Forget />} />
    <Route path='/reset-password/:token' element={<Reset />} />
    <Route path='/' element={<Home />} />

  </Routes>
</BrowserRouter>
        </>
    )
}
export default AppRouter;
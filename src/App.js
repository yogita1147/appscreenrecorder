import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="736921369167-786sn9592kvbkligqda6acgkspuv7bug.apps.googleusercontent.com">
    <Home/>
    </GoogleOAuthProvider>;
    </>
  );
}

export default App;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useEffect } from "react";
import '../src/styles/Header.css'

import axios from 'axios';

//  import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GoogleOAuthProvider } from "@react-oauth/google";

// import { GoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";


const Header = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [show,setShow]=useState(false);


  const login = useGoogleLogin({
    onSuccess: codeResponse => {console.log(codeResponse,'nnmnm'); setUser(codeResponse);  ; 
    },
   
    onError: (error)=>

      console.log('Login Failed',error),
    
  });
  const logOut = () => {
    googleLogout();
    setProfile(null);
};

  

useEffect(
  () => {
      if (user) {
           axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                   headers: {
                       Authorization: `Bearer ${user.access_token}`,
                       Accept: 'application/json'
                   }
               })
               .then((res) => {
                   setProfile(res.data);
                   setShow(true);
               })
               .catch((err) => console.log(err));
       }
       
  },
  [ user ]
);
console.log(profile,'prrr')
  return (

    <div className="Header">

        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <Image src="img/screenlogo.png" width="225px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto align-items-center">
                <Nav.Link href="#home" className="navLink ">
                  Home
                </Nav.Link>
                <Nav.Link href="#RecordScreen" className="navLink">
                  Record Screen
                </Nav.Link>
                <Nav.Link href="#Features" className="navLink">
                  Features
                </Nav.Link>
                <Nav.Link href="#Pricing" className="navLink">
                  Pricing
                </Nav.Link>
                {/* <Nav.Link href="#Videos" className="navLink">
                  Videos
                </Nav.Link>

                <Nav.Link href="#Gallery" className="navLink">
                  Gallery
                </Nav.Link>
                <Nav.Link href="#Gamesee" className="navLink">
                  Gamesee
                </Nav.Link> */}
                <Nav.Link href="#Blog" className="navLink">
                  Blog
                </Nav.Link>
                {/* <NavDropdown title="English" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">हिंदी</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"> Türk</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">Melayu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Deutsch
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Español
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">Polski</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Bosanski
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Le français
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Português
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Bahasa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">اردو</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">ไทย</NavDropdown.Item>
                </NavDropdown> */}
                {/* <button>Sign in with Google  </button>  */}
                
                 {/* {showloginButton ? (
                    <Button onClick={() => login()}>
                    Sign in with Google 
                  </Button>
                  ) : null} */}
                  {profile && show ? (
                    <div>
                
                    <img className='googleImg'src={profile.picture} alt="user image" />
                    
                  
                   
                    <button onClick={logOut}>Log out</button>
                    </div>
            ) : (
              <Button  onClick={() => login()} className='bg-white border-0'>
              <Image src='img/logo192.png'></Image>
            </Button>
                
            )}
     

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        
    
  )
};

export default Header;

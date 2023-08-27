import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Section1 from './Section1';
import './styles/home.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
// import logoImg from '../public/screenlogo.png';

const Home = () => {
  return (
    <>
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Section7/>
     <Section8/>
     
    </>
  )
}

export default Home;

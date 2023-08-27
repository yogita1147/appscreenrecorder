import React from 'react';
import { Row,Container} from 'react-bootstrap';

import './styles/section8.css';

const Section8 = () => {
  return (
    <section className='section8'>
        <div className='py-3'>
      <Container>
      
        <Row>
          <div className='col-md-3'>
            <div className='p-3 col1'>
          <img src='img/logo.png' width={'100%'}/>
          <p className='col1Para'> ScreenRecorderᵀᴹ for Android & iOS is a free, high-quality app that provides stable and smooth screen recording. ScreenRecorderᵀᴹ delivers every feature that you need in most simple and elegant user experience design. </p>
          </div>
          </div>
          <div className='col-md-3 col2Section8'>
           <h4 className='col2Heading text-center'>
           QUICK LINKS
           </h4>
           <ul className='col1Para col2Ul'>
            <li>Privacy Policy</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Social</li>
            <li>Popular Videos</li>
            <li>Contact Us</li>
            <li>Careers </li>
          
           </ul>
          </div>
          <div className='col-md-4'>
          <h4 className='col2Heading '>
           FOLLOW US
           </h4>
           <p className='col1Para'>
           Subscribe and get notified about exclusive offers and upcoming feature updates!

           </p>
           <Row>
           <form>
            <input type='text' placeholder='Enter Your Email' className='inputType'/>
            <button className='inputBtn'>Subscribe</button>
           </form>
           </Row>
            
          </div>
          <div className='col-md-2'>
            <Row>
          <h4 className='col2Heading '>
           GET APP
           </h4>
           <div> <img src='img/Google_Play_Badge_US.png' width='60%' className='media'/></div>
           <div>  <img src='img/apple.png'  width='60%' className='media'/></div>
           <div>   <img src='img/huwaei.png'  width='60%' className='media'/></div>
           <div> <img src='img/galaxy.png' width='60%' className='media'/></div>
          
          
          
           
            </Row>
          </div>
         

        </Row>
        
      </Container>
      </div>
      <div className='bg-white'>
       
          <hr className='hr'/>
          <p className='text-center colorCopyRight'>Copyright © 2023 All Rights Reserved.</p>
      
      </div>
    </section>
  )
}

export default Section8

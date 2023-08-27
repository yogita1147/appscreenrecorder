import React from 'react'
import './styles/section2.css';

const Section2 = () => {
  return (
    <section className='section2 '>
      <div className='container'>
        <div className='section2Inside'>
       <div className='row p-4'>
        <h1 className='text-center  '><span className='font400'>Fast and Easy Way to </span><strong>Screen Record Videos</strong> & <strong>Livestreaming</strong></h1>
        <p className='text-center py-2 section2Para'>Screen Recorder for Android & iOS is a free, high-quality app that provides stable and smooth screen recording. </p>
        <div className='d-flex align-items-center justify-content-center'>
            <img src='img/Google_Play_Badge_US.png' width='10%'/>
            <img src='img/apple.png' className='mx-3' width='10%'/>
            <img src='img/huwaei.png'  className='mx-3' width='10%'/>
            <img src='img/galaxy.png' width='10%'/>
        </div>
       </div>
      </div>
      </div>
    </section>
  )
}

export default Section2;

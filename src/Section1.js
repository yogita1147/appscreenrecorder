import React from "react";
import Container from "react-bootstrap/Container";
import "./styles/section1.css";
import { BsMicMuteFill } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";
import { BiWebcam } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GrCaretPrevious} from "react-icons/gr";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import $ from "jquery";

import { useRef, useEffect } from "react";

import { Carousel } from "react-bootstrap";
const Section1 = () => {
  const owlOptions={
    items:1 ,
     nav:true,
     autoplay:false,
     loop:true,  
     dots:false,
  }

  return (
  
    <section className="section1">
     
        <OwlCarousel {...owlOptions}  >
          <div className=" slide1 d-flex flex-column justify-content-center align-items-start">
            <div className="container">
              <h1 className="slide1Heading">
                Fast and Easy Way to <br />
                <strong>Screen Record</strong> & <strong>videos</strong>
              </h1>
              <h5 class="slide1Para">
                Screen Recorder for Android & iOS is a free, high-quality app
                that provides stable and smooth screen recording.
              </h5>
              <button className="slide1Btn d-flex ">
                <img
                  src="img/slide1.svg"
                  height="23px"
                  className="slideInsideImg mx-2"
                ></img>{" "}
                Start Recording
              </button>
            </div>
          </div>
          <div className=" slide2 d-flex flex-column justify-content-center align-items-start">
            <div className="container">
              <h1 className="slide1Heading">
                Premium Online <br />
                <strong>Screen Recorder</strong>
              </h1>
              <h5 class="slide1Para">
                Enjoy ad-free screen recording & livestreaming with a touch of
                personalisation
              </h5>
             
              <button className="slide2Btn1">Start 3-day free Trial</button>
              <button className="slide2Btn2">
                <img
                  src="img/slide11.svg"
                  className="slideInsideImg d-inline mx-2"
                  color="#c93333"
                ></img>
                Start Recording
              </button>
            </div>
          </div> 
          <div className="slide3  d-flex align-items-center">
            <div className="container">
              <div className="slide3Inside d-flex align-items-center">
                <div className="microDiv colInside text-dark text-center">
                  <BsMicMuteFill Color="black" size={30} />

                  <div className="microphone">Microphone</div>
                </div>
                <div className="colInside screenBg  text-center">
                <MdScreenshotMonitor color="white" size={30}/>
     <div className="">
       Screen Only
     </div>
                </div>
                <div className="colInside text-dark text-center">
                  <BiWebcam size={30} />
                  <div>With WebCam</div>
                </div>
                <div>
                <button className="slide2Btn"><RxDotFilled/>START RECORDING</button>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      
    </section>
   
  );
};

export default Section1;

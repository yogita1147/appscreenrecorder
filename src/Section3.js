import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './styles/section3.css';

const Section3 = () => {
  return (
    
      <div className="bg-light">
        <Container>
          <Row className="align-items-center section3Inside">
            <Col className="col d-flex align-items-center justify-content-center">
              <img src="img/about.png" alt="img" height='500px'/>
            </Col>
            <Col>
              <Row>
                <h2>About Us</h2>
              </Row>
              <Row>
                <p className="section3Para">
                <strong>ScreenRecorderᵀᴹ for Android & iOS</strong> is a free, high-quality app
                that provides stable and smooth screen recording.
                ScreenRecorderᵀᴹ delivers every feature that you need in most
                simple and elegant user experience design.
                </p>
                
                <Row>
                    <p className="section3Para">
                    Packed with a variety
                of features such as screen capture, interactive videos, floating
                button, trim videos. That makes it very convenient to create
                tutorial, promotional video, record games while playing and more
                - making everything simple!
                    </p>
               </Row> 
              </Row>
              <Row>
                <Button className="section3Btn">

                    VIEW MORE
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    
  );
};

export default Section3;

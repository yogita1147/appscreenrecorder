import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './styles/section3.css';
import './styles/section6.css';

const Section6 = () => {
  return (
    
      <div className="section6Color">
        <Container>
          <Row className="align-items-center section3Inside ">
            <Col className="col d-flex align-items-center justify-content-center">
              <img src="img/video1.png" alt="img" height='460px' width={'91%'}/>
            </Col>
            <Col>
              <Row>
                <h2>Uploaded Videos</h2>
              </Row>
              <Row>
                <p className="section3Para">
                Videos are more powerful than a set of images. Show off your Mobile Gaming skills, Create Tutorials. Record to teach, learn, edit & share using YouTube, Twitch, Facebook or our cloud network. Connect seamlessly with all your videos at one place.
                </p>
                
                <Row>
                    <p className="section3Para">
                    Get benefits and free views by getting your videos featured in Screen Recorder app. Some of the videos uploaded through Screen Recorder got thousands of views daily.
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

export default Section6;

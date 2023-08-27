import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './styles/section3.css';

const Section5 = () => {
  return (
   
      <div className="bg-light">
        <Container>
          <Row className="align-items-center section3Inside flex-row-reverse">
            <Col className="col d-flex align-items-center justify-content-center">
              <img src="img/images.png" alt="img" height='500px'/>
            </Col>
            <Col>
              <Row>
                <h2>Uploaded Images</h2>
              </Row>
              <Row>
                <p className="section3Para">
                Taking a Screen Shot on your mobile with Screen Recorder is easy. We additionally offer you FREE Backup option for any of the screenshots on our cloud. You can also take Backup of images/ photos/ pictures from your mobile phone gallery by uploading them on our cloud backup.
                </p>
                
                <Row>
                    <p className="section3Para">
                    You can access your uploaded images anytime, anywhere on any of the iOS, Android or web supported devices. You can keep it private or public as per your choice.
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

export default Section5;

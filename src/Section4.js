import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiConversation } from 'react-icons/bi'
import './styles/section4.css';

const Section4 = () => {
  return (
    
        <div className='section4'>
            <Container className='cont'>
                <Row className='section4Row'>
                    <Col className=' col d-flex flex-column align-items-center section4Col borderLeft'>
                    <img src='img/download.png'></img>
                    <h1 className='text-white eachColNo'>74547728</h1>
                    <h5 className='text-white'>DOWNLOADS</h5>
                    </Col>
                    <Col className=' col d-flex flex-column align-items-center section4Col'>
                    <img src='img/screenshots.png'></img>
                    <h1 className='text-white eachColNo'>74547728</h1>
                    <h5 className='text-white'>SCREENSHOTS</h5>
                    </Col>
                    
                    <Col className=' col d-flex flex-column align-items-center section4Col'>
                    <img src='img/interactive video.png'></img>
                    <h1 className='text-white eachColNo'>74547728</h1>
                    <h5 className='text-white'>LIVE VIDEOS</h5>
                    </Col>
                    <Col className=' col d-flex flex-column align-items-center section4Col borderRight'>
                    <img src='img/video.png'></img>
                    <h1 className='text-white eachColNo'>74547728</h1>
                    <h5 className='text-white'>RECORDINGS</h5>
                    </Col>
                </Row>
            </Container>
        </div>
   
  )
}

export default Section4

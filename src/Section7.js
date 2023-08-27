import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/section7.css";
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { AiOutlineRight } from "react-icons/ai";

const options = {
  responsive: {
    200: {
      items: 1,
    },
    300: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const Section7 = () => {
  return (
    <section className="bg-white py-5 section7">
      <Container className="bd-primary">
        <div>
          <Row>
            <h5 className="px-3">User Reviews</h5>
          </Row>
          <Row className="py-2 px-2">
            <h2>What users say about App ScreenRecorderᵀᴹ ?</h2>
          </Row>
          <Row>
            <div className="rowInside">
              <OwlCarousel
                items={1}
                nav={true}
                autoplay={true}
                loop={true}
                className="bg-white"
              >
                <div className="d-flex align-items-center justify-content-center">
                  <div className="containerInside">
                    <Row>
                      <p className="eachPara">
                        It's simple and easy to use and it has it's own editor.
                        I highly recommend this app. It's my permanent screen
                        recorder app cause i compared it to like 9 other screen
                        recorder apps and it was no contest. Keep up the good
                        work people, 5 stars strong from me.
                      </p>
                    </Row>
                    <Row>
                      <Col xs={2}>
                        <img src="img/unnamed.jpg" className="picInside" />
                      </Col>
                      <Col className="col d-flex align-items-center">
                        <h4 className="text-dark">Ray Reynolds</h4>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="containerInside">
                    <Row>
                      <p className="eachPara">
                        This application is
                        goooooooooooooooooooooooooooooooooooood. Screen recorder
                        is very good application because you can use it to video
                        record any part of your phones screen. It is very useful
                        for torturial or description of app or how to use to
                        someone. Very high quality video. Easy to control and no
                        problem using it. Kudos to the developer, keep the good
                        work up. I didn't see any ad
                      </p>
                    </Row>
                    <Row>
                      <Col xs={2}>
                        <img src="img/kurrie.jpg" className="picInside" />
                      </Col>
                      <Col className="col d-flex align-items-center">
                        <h4 className="text-dark">Amos Istifanus</h4>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="containerInside">
                    <Row>
                      <p className="eachPara">
                        this app is awesome just something ive never seen in
                        other recording apps is to make it to record the sound
                        in the device but not allow outside noise like voice
                        audio and stuff to be heard and only app noise but this
                        app is so cool i love it and im glad i found it! keep up
                        the good work�?😃�?{" "}
                      </p>
                    </Row>
                    <Row>
                      <Col xs={2}>
                        <img src="img/billi.jpg" className="picInside" />
                      </Col>
                      <Col className="col d-flex align-items-center">
                        <h4 className="text-dark">Brad Pasternak</h4>
                      </Col>
                    </Row>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </Row>
        </div>
      </Container>

      <img src="img/ring-circle.png" className="imgPos" />
      <img src="img/user-thumbs.png" className="img1Pos" />

      <Container>
        <div className="section7One">
          <h4>Video Testimonial</h4>

          <div className="my-5 reviews">
            <OwlCarousel
              items={4}
              nav={true}
              autoplay={false}
              loop={true}
              className="bg-white"
              autoheight={true}
              responsive={options.responsive}
            >
              <div className="item">
                <a href="#">
                  <img src="img/one.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/two.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/three.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/four.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/five.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/six.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/seven.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/eight.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/nine.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/ten.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="img/eleven.jpg" />
                  <img src="img/tube-icon.png" className="tubeImg" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* BLOGSSS */}
        <div>
          <h4 className="blogHeading">Blogs</h4>
          <Row>
            <div className="col-sm-6 col-xs-12 col-md-4 ">
              <div className="p-3 m-3 boxBlog">
              <a href="" className="anchorBlog">
                <img
                  src="img/Hybrid-vs-Remote-Work-What-s-The-Future.jpg"
                  width={"100%"}
                />
                <h6 className="headingBlog">Hybrid vs Remote Work: What's The Future?</h6>
                <h6 className="iconBlog">
                  <FaUserAlt />
                  &nbsp;&nbsp;By Admin |&nbsp;
                  <SlCalender />
                  &nbsp;&nbsp; 19 April,2023
                </h6>
                <p>
                  Do you still need clarification about whether remote and
                  hybrid jobs are the same? Fear not, because all your questions
                  will be answered instantly if you read this article. Recently,
                  it's become clear that nothing can stop progress in this
                  technological and innovative world—not even the pandemic could
                  entirely halt our advances. 2020 taught us many lessons,
                  including the importance of being skilled, tech-savvy, and
                  adaptable. We witnessed professionals excel at working from
                  home, demonstrating that telework is a viable option for
                  m.....
                </p>
                <h6 className="readBlog">Read More <AiOutlineRight/></h6>
              </a>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 col-md-4 bg-red">
            <div className="p-3 m-3 boxBlog">
              <a href="" className="anchorBlog">
                <img
                  src="img/Learn-How-to-Turn-Your-Smartphone-into-a-Webcam-for-Your-PC.jpg"
                  width={"100%"}
                />
                <h6 className="headingBlog"> Learn How to Turn Your Smartphone into a Webcam for Your PC</h6>
                <h6 className="iconBlog">
                  <FaUserAlt />
                  &nbsp;&nbsp;By Admin |&nbsp;
                  <SlCalender />
                  &nbsp;&nbsp; 19 April,2023
                </h6>
                <p>
                  Do you still need clarification about whether remote and
                  hybrid jobs are the same? Fear not, because all your questions
                  will be answered instantly if you read this article. Recently,
                  it's become clear that nothing can stop progress in this
                  technological and innovative world—not even the pandemic could
                  entirely halt our advances. 2020 taught us many lessons,
                  including the importance of being skilled, tech-savvy, and
                  adaptable. We witnessed professionals excel at working from
                  home, demonstrating that telework is a viable option for
                  m.....
                </p>
                <h6 className="readBlog">Read More <AiOutlineRight/></h6>
              </a>
              </div>
            
            </div>
            <div className="col-sm-6 col-xs-12 col-md-4  bg-red">
            <div className="p-3 m-3 boxBlog">
              <a href="" className="anchorBlog">
                <img
                  src="img/5-Strategies-for-Creating-Screencast-Videos-in-Marketing.jpg"
                  width={"100%"}
                />
                <h6 className="headingBlog"> Learn How to Turn Your Smartphone into a Webcam for Your PC</h6>
                <h6 className="iconBlog">
                  <FaUserAlt />
                  &nbsp;&nbsp;By Admin |&nbsp;
                  <SlCalender />
                  &nbsp;&nbsp; 19 April,2023
                </h6>
                <p>
                  Do you still need clarification about whether remote and
                  hybrid jobs are the same? Fear not, because all your questions
                  will be answered instantly if you read this article. Recently,
                  it's become clear that nothing can stop progress in this
                  technological and innovative world—not even the pandemic could
                  entirely halt our advances. 2020 taught us many lessons,
                  including the importance of being skilled, tech-savvy, and
                  adaptable. We witnessed professionals excel at working from
                  home, demonstrating that telework is a viable option for
                  m.....
                </p>
                <h6 className="readBlog">Read More <AiOutlineRight/></h6>
              </a>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center align-items-center">
            <button className="viewMoreBtn p-2">VIEW MORE</button>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Section7;

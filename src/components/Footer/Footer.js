import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'

function Footer() {
    let bg = {
        backgroundImage: "url(https://www.w3schools.com/images/background_in_space.gif)",
        backgroundPosition: "center center"
    }
  return (
    <Container style={{...bg,overflowX:"hidden"}} fluid classNameName='py-5'>
    <section className='position-relative pt-3'>
      <div className="container text-center text-md-start mt-5">
      <div className="row mt-3 text-white mx-md-5 ps-lg-4">
          <div className="text-center col-lg-1 my-2">
            <Image src="https://www.w3schools.com/aws/img_aws_w3_logo.png" height={"45px"} />
          </div>
          <div className="text-center col-lg-2 pt-3 my-2">
            <p style={{fontSize:"14px"}}>SPACES</p>
          </div>
          <div className="text-center col-lg-2 pt-3 my-2">
            <p style={{fontSize:"14px"}}>UPGRADE</p>
          </div>
          <div className="text-center col-lg-2 pt-3 my-2">
            <p style={{fontSize:"14px"}}>NEWSLETTER</p>
          </div>
          <div className="text-center col-lg-2 pt-3 my-2">
            <p style={{fontSize:"14px"}}>GET CERTIFIED</p>
          </div>
          <div className="text-center col-lg-2 pt-3 my-2">
            <p style={{fontSize:"14px"}}>REPORT ERROR</p>
          </div>
      </div>
        <div className="row mt-3 text-white">
          <div className="text-center col-lg-2 mx-auto my-4">
            <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"14px"}}>Top Tutorials</h6>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>HTML Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>CSS Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>JavaScript Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>How To Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>SQL Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Python Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>W3.CSS Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Bootstrap Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>PHP Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Java Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>C++ Tutorial</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>jQuery Tutorial</a>
            </p>
          </div>
          <div className="text-center col-lg-2 mx-auto my-4">
            <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"14px"}}>Top References</h6>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>HTML Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>CSS Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>JavaScript Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>SQL Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Python Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>W3.CSS Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Bootstrap Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>PHP Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>HTML Colors</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Java Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Angular Reference</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>jQuery Reference</a>
            </p>
          </div>
          <div className="text-center col-lg-2 mx-auto my-4">
            <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"14px"}}>Top Examples</h6>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>HTML Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>CSS Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>JavaScript Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>How To Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>SQL Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Python Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>W3.CSS Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Bootstrap Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>PHP Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Java Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>XML Examples</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>jQuery Examples</a>
            </p>
          </div>
          <div className="text-center col-lg-2 mx-auto mb-md-0 my-4" style={{zIndex:1}}>
            <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"14px"}}>Get Certified</h6>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>HTML Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>CSS Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>JavaScript Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Front End Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>SQL Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Python Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>PHP Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>jQuery Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>Java Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>C++ Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>C# Certificate</a>
            </p>
            <p className="my-0">
              <a href="#!" style={{textDecoration: "none",color:"white",fontSize:"12px"}}>XML Certificate</a>
            </p>
          </div>
          <Col xs={10} className='mx-auto mt-5'>
            <a href="#abc" class="text-white me-4">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#abc" class="text-white me-4">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#abc" class="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#abc" class="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <span className='ms-4' style={{fontSize:"12px"}}>FORUM</span>
            <span className='ms-4' style={{fontSize:"12px"}}>ABOUT</span>
          </Col>
          <Col xs={10} className='mx-auto' style={{fontSize:"12px"}}>
            <Row>
              <Col lg={7}>
                <p className='mt-2'>
                  W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                  Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                  of all content. While using W3Schools, you agree to have read and accepted our <a href="#abc">terms of use</a>,<a href="#abc">cookie and privacy policy.</a>
                </p>
                <p>
                  <a href="#abc">Copyright 1999-2023</a> by Refsnes Data. All Rights Reserved. <a href="#abc">W3Schools is Powered by W3.CSS.</a>
                </p>
              </Col>
              <Col lg={4} className='p-0 m-0'>
                  <Image src='https://www.w3schools.com/images/lynx_landing.png' height={"450px"} />
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    </section>
    </Container>
  )
}

export default Footer

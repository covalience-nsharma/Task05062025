import React from 'react'
import { Button, Container, InputGroup ,Form} from 'react-bootstrap';

function MainPage() {
  const buttonStyle = {
    borderTopRightRadius: "100px",
    borderBottomRightRadius: "100px",
    zIndex:0,
    backgroundColor: "#04AA6D",
    border: "none",
    width: "90px"
  }
  return (
    <>
    <div className="main-div d-flex align-items-center">
        <Container className='inner-content' style={{width: "500px"}}>
            <h1 className='display-1'>Learn to Code</h1>
            <p className='h4'>With the world's largest web developer site.</p>
            <InputGroup className="mb-3">
              <Form.Control
              type='search'
              placeholder="Search our tutorials,e.g.HTML"
              aria-label="Search courses"
              style={{borderTopLeftRadius: "100px",borderBottomLeftRadius: "100px"}}
              />
              <Button style={buttonStyle}><i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i></Button>
            </InputGroup>
            <a href="#action1" className='link-light not-sure h4'>Not Sure where to begin?</a>
        </Container>
        <div className="inner-box d-none d-lg-block"></div>
    </div>
      <svg width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
      </svg> 
    </>
  );
}

export default MainPage;

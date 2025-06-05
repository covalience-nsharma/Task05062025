import React from 'react'
import { Button, Container, Row, Col, Image} from 'react-bootstrap'

function Gifbox3() {
    const style = {
        backgroundColor: "#d9eee1",
        display: "flex",
        flexDirection: "column",
      }
  return (
    <Container fluid style={style} className='pt-5 pb-5'>
            <Row className='d-flex flex-column my-5 mx-xs-0 mx-md-5 mx-lg-5'>
                <Col xs={12} className='text-center'>
                   <h2 className='display-2 mb-4'>My Learning</h2>
                   <p className='h5 mb-3'>Track your progress with our free "My Learning" program.</p>
                   <p className='h5 mb-5'>Log in to your account, and start earning points!</p>
                </Col>
                <Col xs={12} lg={9} className='d-flex flex-column justify-content-center mx-auto'>
                    <Image src='https://www.w3schools.com/myl-green-off.png' fluid/>
                </Col >
                <Col className='text-center'>
                    <Button className='mx-auto mt-4 mb-2 rounded-pill btn-lg' style={{border: "none", backgroundColor: "#05aa6d",width: "260px"}}>Sign Up for Free</Button> 
                </Col>
            </Row> 
    </Container>
  )
}

export default Gifbox3;
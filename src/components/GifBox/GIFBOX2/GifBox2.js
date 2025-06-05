import React from 'react'
import { Button, Container, Row, Col, Image} from 'react-bootstrap'

function Gifbox2() {
    const style = {
        backgroundColor: "#272934",
        display: "flex",
        flexDirection: "column",
      }
  return (
    <Container fluid style={style} className='pt-0 pb-3'>
            <Row className='d-flex flex-column my-5 mx-xs-0 mx-md-5 mx-lg-5'>
                <Col xs={12} className='text-center'>
                   <h1 className='text-light display-2 mb-4'>W3Schools Spaces</h1>
                   <p className='text-light h4 mb-3'>If you want to create your own website, check out <a href="#action6">W3Schools Spaces.</a></p>
                   <p className='text-light h4 mb-5'>It is free to use, and does not require any setup:</p>
                </Col>
                <Col xs={12} lg={9} className='d-flex flex-column justify-content-center mx-auto'>
                    <Image src='https://www.w3schools.com/spaces/dynamicspaces.gif' fluid/>
                </Col >
                <Col className='d-flex flex-column justify-content-center mx-auto'>
                    <Image className='my-5 d-none d-lg-block' src='https://www.w3schools.com/how-spaces-works3.png' fluid/>
                </Col>
                <Col className='text-center'>
                    <Button className='mx-auto my-4 rounded-pill btn-lg my-5' style={{border: "none", backgroundColor: "#05aa6d",width: "260px"}}>Learn More</Button> 
                </Col>
            </Row> 
    </Container>
  )
}

export default Gifbox2;
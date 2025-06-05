import React from 'react'
import { Button, Col, Container, Row, Image} from 'react-bootstrap'

function ProUser() {
  return (
    <Container className='text-center text-light py-5' style={{backgroundColor: "#282a35"}} fluid>
        <Row className='d-flex flex-column justify-content-center mb-5'>
            <Col className='mx-auto d-grid mb-5'>
                <h3 className='my-4 display-1'>Become a PRO User</h3>
                <Col className='text-start mx-auto'>
                    <p className='h3 mb-5' style={{color: "#FFC0C7"}}>And unlock powerful features:</p>
                    <p className='h6 my-3'><Image src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" className='me-2'/>Browse W3Schools without ads</p>
                    <p className='h6 my-0'><Image src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" className='me-2'/>Website hosting (Includes Spaces PRO)</p>
                    <p className='h6 my-3'><Image src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" className='me-2'/>Access to our HTML Video Tutorial</p>  
                </Col>
            </Col>
            <Col>
                <Button className='btn-lg rounded-pill' style={{width: "260px",border:"none",backgroundColor:"#05aa6d"}}>Learn More</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProUser
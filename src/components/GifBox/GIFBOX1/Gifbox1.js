import React from 'react'
import { Button, Container, Row, Col, Image, Stack} from 'react-bootstrap'

function Gifbox1() {
  const style = {
    backgroundColor: "#272934",
    display: "flex",
    flexDirection: "column",
  }
  return (
    <Container fluid style={style} className='py-5'>
            <Row className='d-flex flex-column my-5 mx-xs-0 mx-md-5 mx-lg-5'>
                <Col xs={12} className='text-center'>
                   <h2 className='text-light display-1'>Code Editor</h2>
                   <p className='text-light h5 mb-5'>With our online code editor, you can edit code and view the result in your browser</p>
                </Col>
                <Col xs={12} lg={9} className='mx-auto'>
                    <Stack>
                      <Image src='https://www.w3schools.com/codeeditor.gif' fluid/>
                      <Container className='px-0 d-grid gap-2 d-sm-flex justify-content-sm-start' fluid>
                          <Button className='my-4' style={{border: "none", backgroundColor: "#05aa6d"}}>Try Frontend Editor (HTML/CSS/JS)</Button> 
                      </Container>
                      <Container className='px-0 d-grid gap-2 d-sm-flex justify-content-sm-start' fluid>
                          <Button className='text-dark' style={{border: "none", backgroundColor:"#fff4a3"}}>Try Backend Editor (Python/PHP/Java/C..)</Button> 
                      </Container>
                    </Stack>
                </Col>
            </Row> 
    </Container>
  )
}

export default Gifbox1;

import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function IntroBoxJS() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
    <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
        <h1 className='display-5 text-bold mt-4 mx-4'>JavaScript Introduction</h1>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        <Container fluid className='pt-2 pb-0 px-4' style={{backgroundColor:"#d9eee1"}}>
            <p className='py-5'>This page contains some examples of what JavaScript can do.</p>
        </Container>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>JavaScript Can Change HTML Content</h2>
            <p className='mb-4'>One of many JavaScript HTML methods is getElementById().</p>
            <p>The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <Container fluid className='pt-3 pb-1' style={{backgroundColor:"white"}}>
                        <p>{'document.getElementById'} (<span style={{color:"brown"}}>"demo"</span>).innerHTML = <span style={{color:"brown"}}>"Hello JavaScript"</span>;</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>JavaScript Can Change HTML Styles (CSS)</h2>
            <p className='mb-4'>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-3 mx-1'>Example:</h4>
                    <Container fluid className='pt-3 pb-1' style={{backgroundColor:"white"}}>
                        <p>{'document.getElementById'} (<span style={{color:"brown"}}>"demo"</span>).style.fontSize = <span style={{color:"brown"}}>"35px"</span>;</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>JavaScript Can Hide HTML Elements</h2>
            <p className='mb-4'>Hiding HTML elements can be done by changing the display style:</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-3 mx-1'>Example:</h4>
                    <Container fluid className='pt-3 pb-1' style={{backgroundColor:"white"}}>
                        <p>{'document.getElementById'} (<span style={{color:"brown"}}>"demo"</span>).style.display = <span style={{color:"brown"}}>"none"</span>;</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>JavaScript Can Show HTML Elements</h2>
            <p className='mb-4'>Showing hidden HTML elements can also be done by changing the display style:</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-3 mx-1'>Example:</h4>
                    <Container fluid className='pt-3 pb-1' style={{backgroundColor:"white"}}>
                        <p>{'document.getElementById'} (<span style={{color:"brown"}}>"demo"</span>).style.display = <span style={{color:"brown"}}>"block"</span>;</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
      </Container>
      <Footer />
    </Container>
  )
}

export default IntroBoxJS
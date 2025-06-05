import React from 'react'
import { Button, Container ,Row, Col,Image} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function SyntaxCSS() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
    <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
        <h1 className='display-5 text-bold mt-4 mx-4'>CSS Syntax</h1>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-2 pb-0 px-4'>
            <p>A CSS rule consists of a selector and a declaration block.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-3'>CSS Syntax</h2>
            <Container fluid className='mb-4'>
                <Image fluid src="https://www.w3schools.com/css/img_selector.gif" />
            </Container>
            <p>The selector points to the HTML element you want to style.</p>
            <p>The declaration block contains one or more declarations separated by semicolons.</p>
            <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
            <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <p>{"In this example all <p> elements will be center-aligned, with a red text color:"}</p>
                    <Container fluid className='py-3' style={{backgroundColor:"white"}}>
                        <p> <span style={{color:"brown"}}>p </span>{"{"} <br/>&nbsp;&nbsp; <span style={{color:"red"}}>color</span>: <span style={{color:"blue"}}>red</span>;<br/>&nbsp;&nbsp; <span style={{color:"red"}}>text-align</span>: <span style={{color:"blue"}}>center</span>; <br/> {"}"}</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-3'>Example Explained</h2>
            <ul>
                <li>p is a selector in CSS (it points to the HTML element you want to style: {"<p>"}).</li>
                <li>color is a property, and red is the property value</li>
                <li>text-align is a property, and center is the property value</li>
            </ul>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
      </Container>
      <Footer />
    </Container>
  )
}

export default SyntaxCSS
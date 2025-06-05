import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Css from '../../Main-languages/LanguagesCode/Css'

function ContentBoxIntro() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
    <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
        <h1 className='display-5 text-bold mt-4 mx-4'>CSS Introduction</h1>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-2 pb-0 px-4'>
            <p>CSS is the language we use to style a Web page.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-3'>What is CSS?</h2>
            <ul>
                <li>CSS stands for Cascading Style Sheets</li>
                <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
                <li>External stylesheets are stored in CSS files</li>
            </ul>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4' >
            <h2 className='mt-4 mb-4'>Why Use CSS?</h2>
            <p className='mb-4'>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <Css/>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4' >
            <h2 className='mt-4 mb-4'>CSS Solved a Big Problem</h2>
            <p className='mb-4'>HTML was NEVER intended to contain tags for formatting a web page!</p>
            <p className='mb-4'>HTML was created to describe the content of a web page, like:</p>
            <p className='mb-4'>{"<h1>This is a heading</h1>"}</p>
            <p className='mb-4'>{"<p>This is a paragraph.</p>"}</p>
            <p className='mb-4'>{"When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web"}<br/>
            developers. Development of large websites, where fonts and color information were added to every single page, became a<br/>
            long and expensive process.
            </p>
            <p className='mb-4'>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
            <p className='mb-4'>CSS removed the style formatting from the HTML page!</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4' >
            <h2 className='mt-4 mb-4'>CSS Saves a Lot of Work!</h2>
            <p className='mb-4'>The style definitions are normally saved in external .css files.</p>
            <p className='mb-4'>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
      </Container>
      <Footer />
    </Container>
  )
}

export default ContentBoxIntro
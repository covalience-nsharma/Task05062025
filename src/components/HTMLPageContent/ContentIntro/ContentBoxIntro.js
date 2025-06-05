import React from 'react'
import { Button, Container ,Row, Col,Image} from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Html from '../../Main-languages/LanguagesCode/Html'

function ContentBoxIntro() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
    <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
        <h1 className='display-5 text-bold mt-4 mx-4'>HTML Introduction</h1>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-2 pb-0 px-4'>
            <p>HTML is the standard markup language for creating Web pages.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-3'>What is HTML?</h2>
            <ul>
                <li>HTML stands for Hyper Text Markup Language</li>
                <li>HTML is the standard markup language for creating Web pages</li>
                <li>HTML describes the structure of a Web page</li>
                <li>HTML consists of a series of elements</li>
                <li>HTML elements tell the browser how to display the content</li>
                <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
            </ul>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid>
            <h2 className='mt-4 mx-4 mb-4'>A Simple HTML Document</h2>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <Html/>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 

            <h3 className='mt-4 mx-2 mb-4'>Example Explained</h3>
            <ul className='mx-3'>
                <li>The <span style={{color:"red"}}>{"<"}!DOCTYPE html{">"}</span> declaration defines that this document is an HTML5 document</li>
                <li>The <span style={{color:"red"}}>{"<"}html{">"}</span> element is the root element of an HTML page</li>
                <li>The <span style={{color:"red"}}>{"<"}head{">"}</span> element contains meta information about the HTML page</li>
                <li>The <span style={{color:"red"}}>{"<"}title{">"}</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                <li>The <span style={{color:"red"}}>{"<"}body{">"}</span> element defines the document's body, and is a container for all the visible contents, such as headings,<br/> paragraphs, images, hyperlinks, tables, lists, etc.</li>
                <li>The <span style={{color:"red"}}>{"<"}h1{">"}</span> element defines a large heading</li>
                <li>The <span style={{color:"red"}}>{"<"}p{">"}</span> element defines a paragraph</li>
            </ul>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid>
            <h2 className='mt-4 mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5 '>Web Browsers</h2>
            <p className='mx-2 mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.</p>
            <p className='mx-2 mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>A browser does not display the HTML tags, but uses them to determine how to display the document:</p>
            <Container className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Image fluid src="https://www.w3schools.com/html/img_chrome.png" />
            </Container>
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
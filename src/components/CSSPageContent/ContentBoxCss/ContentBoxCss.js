import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Css from '../../Main-languages/LanguagesCode/Css'

function ContentBoxCss() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
        <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
            <h1 className='display-5 text-bold mt-4 mx-4'>CSS Tutorial</h1>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
            <Container fluid className='pt-5 pb-4 px-4' style={{backgroundColor:"#d9eee1"}}>
                <p>CSS is the language we use to style an HTML document..</p>
                <p>CSS describes how HTML elements should be displayed.</p>
                <p>This tutorial will teach you CSS from basic to advanced.</p>
                <p><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Start learning CSS now {">>"}</Button></p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2 px-4'>
                <h2>Examples in Each Chapter</h2>
                <p className='mt-4 mb-4'>This CSS tutorial contains hundreds of CSS examples.</p>
                <p className='mt-4 mb-4'>With our online editor, you can edit the CSS, and click on a button to view the result.</p>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='abc'>
                        <h4 className='my-4 mx-1'>Example:</h4>
                        <Css />
                        <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                    </Col>
                </Row> 
                <h5 className='ms-1'>Click on the "Try it Yourself" button to see how it works.</h5>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='mt-4 mx-4'>CSS Examples</h2>
                <p className='mx-4 mt-4'>Learn from over 300 examples! With our editor, you can edit the CSS, and click on a button to view the result.</p>
                <Button className='mx-4 mt-1 mb-3 border-0 text-dark' style={{backgroundColor:"#e7e9eb"}}>Go to CSS Examples!</Button>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='mt-4 mx-2 mb-4'>CSS Exercises</h2>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='bg-dark rounded pb-4'>
                        <h2 className='my-4 mx-1 text-light'>Test Yourself With Exercises</h2>
                        <Container className='bg-light pb-4'>
                            <h2 className='display-6 pt-3 mb-3'>Exercise:</h2>
                            <p className='mb-3'>Set the color of all {"<p>"} elements to red.</p>
                            <Container className='p-2 mb-4' style={{backgroundColor:"#E7E9EB"}} fluid>
                                <p className='h5 my-3' style={{fontWeight:"400"}}>
                                {"<style>"}<br/> <span className='bg-light text-light'>__</span>&nbsp;&nbsp;{ "{"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bg-light text-light'>_______</span>&nbsp;&nbsp;red;<br/>
                                {"}"}<br/>
                                {"</style>"}
                                </p>
                            </Container>
                            <p className='mb-4'><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Submit Answer {">>"}</Button></p>
                            <a href='#abc'>Start the Exercise</a>
                        </Container>
                    </Col>
                </Row> 
            </Container>
            <hr className='ms-2 me-5'/>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        </Container>
        <Footer />
    </Container>
  )
}

export default ContentBoxCss
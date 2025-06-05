import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Html from '../../Main-languages/LanguagesCode/Html'
import './styles.css'

function ContentBox() {
  return (
    <Container fluid className='me-0 pe-0 media' style={{paddingTop:"100px"}}>
        <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
            <h1 className='display-5 text-bold mt-4 mx-4'>HTML Tutorial</h1>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4' style={{backgroundColor: "#04AA6D",border:"none",float:'right',marginRight:"60px"}}>Next {">"}</Button>
            <Container fluid className='pt-5 pb-4 px-4' style={{backgroundColor:"#d9eee1"}}>
                <p>HTML is the standard markup language for Web pages.</p>
                <p>With HTML you can create your own Website.</p>
                <p>HTML is easy to learn - You will enjoy it!</p>
                <p><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Study our free HTML Tutorial {">>"}</Button></p>
                <Button className='bg-dark text-light border-0'>Watch our Video Tutorial {">>"}</Button>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2 px-4'>
                <h2>Easy Learning with HTML "Try it Yourself"</h2>
                <p className='mt-4 mb-4'>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
                <Row className='ms-1 mb-4'>
                    <Col md={11} sm={10} className='abc'>
                        <h4 className='my-4 mx-1'>Example:</h4>
                        <Html/>
                        <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                    </Col>
                </Row> 
                <h5 className='ms-1'>Click on the "Try it Yourself" button to see how it works.</h5>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='mt-4 mx-4'>HTML Examples</h2>
                <p className='mx-4 mt-4'>In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</p>
                <Button className='mx-4 mt-1 mb-3 border-0 text-dark' style={{backgroundColor:"#e7e9eb"}}>Go to HTML Examples!</Button>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='mt-4 mx-4'>HTML Exercises</h2>
                <p className='mx-4 mt-4'>This HTML tutorial also contains nearly 100 HTML exercises.</p>
                <Row className='ms-4 mb-4'>
                    <Col md={11} sm={10} className='bg-dark rounded pb-4'>
                        <h2 className='my-4 mx-1 text-light'>Test Yourself With Exercises</h2>
                        <Container className='bg-light pb-4'>
                            <h2 className='display-6 pt-3 mb-3'>Exercise:</h2>
                            <p className='mb-3'>Add a "tooltip" to the paragraph below with the text "About W3Schools".</p>
                            <Container className='p-2 mb-4' style={{backgroundColor:"#E7E9EB"}} fluid>
                                <p className='h5' style={{fontWeight:"400"}}>
                                {"<p ="} <span className='bg-light text-light'>____</span> { "About W3Schools > W3Schools is a web developer's site.</p>"}
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
            <Button className='my-4' style={{backgroundColor: "#04AA6D",border:"none",float:'right',marginRight:"60px"}}>Next {">"}</Button>
        </Container>
        <Footer />
    </Container>
  )
}

export default ContentBox

import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function PYContent() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
        <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
            <h1 className='display-5 text-bold mt-4 mx-4'>Python Tutorial</h1>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
            <Container fluid className='pt-5 pb-4 px-4' style={{backgroundColor:"#d9eee1"}}>
                <h2>Learn Python</h2>
                <p>Python is a popular programming language.</p>
                <p>Python can be used on a server to create web applications.</p>
        
                <p><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Start learning Python now {">>"}</Button></p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='mt-4 mx-2 mb-4'>Learning By Examples</h2>
                <p>With our "Try it Yourself" editor, you can edit Python code and view the result.</p>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <Container fluid className='pt-3 pb-1' style={{backgroundColor:"white"}}>
                        <p>print("Hello, World!")</p>
                    </Container>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>

                </Col>
            </Row> 
            <b>Click on the "Try it Yourself" button to see how it works.</b>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2>Python File Handling</h2>
                <p>In our File Handling section you will learn how to open, read, write, and delete files.</p>
                <a href='#123'> Python File Handling</a>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2>Python Database Handling</h2>
                <p>In our database section you will learn how to access and work with MySQL and MongoDB databases:</p>
                <a href='#222'>Python MySQL Tutorial</a> <br />
                <a href='#222'>Python MongoDB Tutorial</a>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <h2 className='my-4'>Python Exercises</h2>

                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='bg-dark rounded pb-4'>
                        <h2 className='my-4 mx-1 text-light'>Test Yourself With Exercises</h2>
                        <Container className='bg-light pb-4'>
                            <h2 className='display-6 pt-3 mb-3'>Exercise:</h2>
                            <p className='mb-3'>Insert the missing part of the code below to output "Hello World".</p>
                            <Container className='p-2 mb-4' style={{backgroundColor:"#E7E9EB"}} fluid>
                                <p className='h5 my-3' style={{fontWeight:"400"}}>
                                <span className='bg-light text-light'>_______</span> ("Hello World")
                                </p>
                            </Container>
                            <p className='mb-4'><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Submit Answer {">>"}</Button></p>
                            <a href='#abc'>Start the Exercise</a>
                        </Container>
                    </Col>
                </Row> 
            </Container>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        </Container>
        <Footer />
    </Container>
  )
}

export default PYContent
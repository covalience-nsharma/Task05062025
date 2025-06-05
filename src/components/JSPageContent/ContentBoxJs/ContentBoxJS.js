import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function ContentBoxJS() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
        <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
            <h1 className='display-5 text-bold mt-4 mx-4'>JavaScript Tutorial</h1>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
            <Container fluid className='pt-5 pb-4 px-4' style={{backgroundColor:"#d9eee1"}}>
                <p>JavaScript is the world's most popular programming language.</p>
                <p>JavaScript is the programming language of the Web.</p>
                <p>JavaScript is easy to learn.</p>
                <p>This tutorial will teach you JavaScript from basic to advanced.</p>
                <p><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Start learning JavaScript now {">>"}</Button></p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2'>
                <h2>Examples in Each Chapter</h2>
                <p className='mt-4 mb-4'>With our "Try it Yourself" editor, you can edit the source code and view the result.</p>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='abc'>
                        <h4 className='my-4 mx-1'>Example:</h4>
                        <Container fluid className='py-3' style={{backgroundColor:"white"}}>
                            <h3 className='mb-3'>My First JavaScript</h3>
                            <button>Click Me to display Date and Time</button>
                        </Container>
                        <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                    </Col>
                </Row> 
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2'>
                <h2 className='mx-2'>Use the Menu</h2>
                <p className='mx-2 mt-4'>We recommend reading this tutorial, in the sequence listed in the menu.</p>
                <p className='mx-2 mt-4'>If you have a large screen, the menu will always be present on the left.</p>
                <p className='mx-2 mt-4 mb-3'>If you have a small screen, open the menu by clicking the top menu sign ☰.</p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2'>
                <h2 className='mx-2'>Learning Speed</h2>
                <p className='mx-2 mt-4'>Everything is up to you.</p>
                <p className='mx-2 mt-4'>If you are struggling, take a break, or re-read the material.</p>
                <p className='mx-2 mt-4'>Always make sure you understand all the "Try-it-Yourself" examples.</p>
                <p className='mx-2 mt-4 mb-3'>The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code !</p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='bg-dark rounded pb-4'>
                        <h2 className='my-4 mx-1 text-light'>Test Yourself With Exercises</h2>
                        <Container className='bg-light pb-4'>
                            <h2 className='display-6 pt-3 mb-3'>Exercise:</h2>
                            <p className='mb-3'>Create a variable called carName and assign the value Volvo to it.</p>
                            <Container className='p-2 mb-4' style={{backgroundColor:"#E7E9EB"}} fluid>
                                <p className='h5 my-3' style={{fontWeight:"400"}}>
                                var <span className='bg-light text-light'>_______</span> = "<span className='bg-light text-light'>_______</span>"
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

export default ContentBoxJS
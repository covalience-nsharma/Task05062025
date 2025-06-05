import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../navbar2/Navbar2';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function NavHome(){
    const Navigate = useNavigate();
    function handleNavigate(){
        Navigate('/');
    }

    return(
    <div style={{position: "fixed",width:"100%",zIndex:2}}>
    <Navbar expand="md" className="bg-white py-0">
        <Container fluid className='py-0'>
            <Navbar.Brand href="#" onClick={handleNavigate}><Image src="https://www.computerhope.com/jargon/w/w3schools.png" style={{height:37}} fluid/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-lg-0"
                navbarScroll
                >
                <NavDropdown title="Tutorials" id="navbarScrollingDropdown" className='w-100 navbarHov py-2' style={{position:"static",overflow:"scroll"}}>
                    <Container className='col-12 py-5' style={{width:"1800px",backgroundColor:"#282a35"}}>
                        <Row className='mx-xl-5 ps-xl-5 text-light'>
                            <Col lg={10} xl={9} className='lg-mx-5'>
                                <Row>
                                    <Col xs={12} md={6}>
                                    <h2>Tutorials</h2>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                    placeholder="filter..."
                                    aria-label="filter"
                                    aria-describedby="basic-addon2"
                                    className='rounded-pill'
                                    />
                                    </Col>
                                </Row>
                               <Row  className='py-4'>
                                <Col lg={4} className='ps-2 py-2'>
                                    <h4>HTML and CSS</h4>
                                    <p className='mt-3 mb-0'>Learn <b>HTML</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>RWD</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>Bootstrap</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Overview</a></p>
                                    <p className='mb-0'>Learn <b>W3.CSS</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Sass</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Colors</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Icons</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>SVG</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Canvas</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Graphics</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>Character Sets</b><a className='px-1' href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>How To</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                </Col>
                                <Col lg={4} className='px-0 py-2'>
                                <h4>JavaScript</h4>
                                    <p className='mt-3 mb-0'>Learn <b>JavaScript</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>React</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>jQuery</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Vue</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>AngularJs</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>JSON</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>AJAX</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>AppML</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>W3.JS</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                </Col>
                                <Col lg={4} className='px-0 py-2'>
                                <h4>Backend</h4>
                                    <p className='mt-3 mb-0'>Learn <b>Python</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>SQL</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>MySQL</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Overview</a></p>
                                    <p className='mb-0'>Learn <b>PHP</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Java</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>C</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>C++</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>C#</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>R</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Kotlin</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>Go</b><a className='px-1' href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Django</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>PostgreSQL</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>TypeScript</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>ASP</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a>  <a href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Node.js</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>Rasberry Pi</b><a className='px-1' href="#xyz" style={{fontSize: "12px"}}>Reference</a></p>
                                    <p className='mb-0'>Learn <b>Git</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                    <p className='mb-0'>Learn <b>MongoDB</b> <a className='px-1' href="#abc" style={{fontSize: "12px"}}>Tutorial</a></p>
                                </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown>
                <NavDropdown title="Exercises" id="navbarScrollingDropdown" className='mx-2 py-2 navbarHov'></NavDropdown>
                <NavDropdown title="Get Certified" id="navbarScrollingDropdown" className='mx-2 py-2 navbarHov'></NavDropdown>
                <NavDropdown title="Services" id="navbarScrollingDropdown" className='mx-2 py-2 navbarHov'></NavDropdown>

            <div className='d-none d-lg-flex justify-content-center align-content-center py-2'>
                <Form>
                    <Form.Control
                    style={{borderRadius: 20,width: 170,height:34}}
                    type="search"
                    placeholder="Search..."
                    className='my-1 mx-2'
                    aria-label="Search"
                    />
                </Form>
                <Navbar.Brand href="#" className='ms-2'><Image src="https://static-00.iconduck.com/assets.00/dark-theme-icon-512x512-185rlszm.png" style={{height:"15px",width:"15px"}}/></Navbar.Brand>
            </div>
            </Nav>
            <Nav.Link href="#abc" className='d-none d-xl-block'><i className="fa-solid fa-code" style={{color: "#9663f6"}}></i><span className='ps-2'>Spaces</span></Nav.Link>
            <Nav.Link href="#abc" className='ms-3 d-none d-xl-block'><i class="fa-solid fa-cart-shopping" style={{color: "#9663f6"}}></i><span className='ps-2'>Certificates</span></Nav.Link>
            <ButtonGroup className='d-none d-md-block ms-3 rounded-pill' style={{background:"#d9eee1"}}>
                <Button className='rounded-pill border-0' style={{background:"#04AA6D"}}>Sign Up</Button>
                <Button className='rounded-pill text-dark border-0' style={{background:"#d9eee1"}}>Log in</Button>
            </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    <Navbar2 />
    </div>
    );
}

export default NavHome;
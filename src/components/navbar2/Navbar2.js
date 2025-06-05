import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const Navigate = useNavigate();
  function handleNavigate(){
    Navigate('/html/home');
  }
  function handleNavigate2(){
    Navigate('/css/home');
  }
  function handleNavigate3(){
    Navigate('/js/home');
  }

  function handleNavigate4(){
    Navigate('/sql/home');
  }

  function handleNavigate5(){
    Navigate('/python/home');
  }
  return (
    <Navbar style={{height: "30px",backgroundColor:"#282a35",overflowY:"hidden"}}>
      <Container className='overflow-x-scroll d-flex mx-auto mt-2 mb-1' fluid>
          <Nav
            className="pb-1 my-lg-0 mx-auto"
          >
              <Nav.Link className='text-white me-2 navbarHover' onClick={handleNavigate}>HTML</Nav.Link>
              <Nav.Link href="#action2" className='text-white mx-2 navbarHover' onClick={handleNavigate2}>CSS</Nav.Link>
              <Nav.Link href="#action3" className='text-white mx-2 navbarHover' onClick={handleNavigate3}>JAVASCRIPT</Nav.Link>
              <Nav.Link href="#action4" className='text-white mx-2 navbarHover' onClick={handleNavigate4}>SQL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover' onClick={handleNavigate5}>PYTHON</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>JAVA</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>PHP</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>HOWTO</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>W3.CSS</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>C</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>C++</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>C#</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>BOOTSTRAP</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>REACT</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>MYSQL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>JQUERY</Nav.Link>
              <Nav.Link href="#action5" className='text-white navbarHover'>EXCEL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>XML</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>DJANGO</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>NODEJS</Nav.Link>
              <Nav.Link href="#action5" className='text-white navbarHover'>R</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2 navbarHover'>TYPESCRIPT</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Navbar2;

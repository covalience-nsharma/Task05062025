import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VerticalNavJS() {
  const navigate = useNavigate();
  function Navigate(){
    navigate("/js/home");
  }

  function Navigate2(){
    navigate("/js/intro");
  }

  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-3 pe-1 my-3 pe-5'>JS Tutorial &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</h4>
                <div className="flex-column">
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate}>JS HOME</p>
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate2}>JS Introduction</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Where To</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Output</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Statements</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Syntax</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Comments</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Variables</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Let</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Const</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Operators</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Arithmetic</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Assignment</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Data Types</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Functions</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Objects</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Events</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Strings</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS String Methods</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS String Search</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS String Templates</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Numbers</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS BigInt</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Number Methods</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Number properties</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Arrays</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Array Methods</p>
                    <p className='text-dark my-0 ps-3 paraCol'>JS Array Sort</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNavJS
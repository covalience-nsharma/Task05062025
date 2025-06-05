import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VerticalNavSQL() {
  const navigate = useNavigate();
  function Navigate(){
    navigate("/python/home");
  }

  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-2 pe-1 my-3 pe-5'>Python Tutorial</h4>
                <div className="flex-column">
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate}>Python HOME</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Introduction</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Get Started</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Syntax</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Comments</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Variables</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Data Types</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Numbers</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Casting</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python strings</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Operators</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Boolean</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Lists</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Tuples</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Sets</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Dictionaries</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python If...Else</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python While Loop</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Functions</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Arrays</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Inheritance</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Iterators</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Scope</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Modules</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Dates</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python Math</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python JSON</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python RegEx</p>
                    <p className='text-dark my-0 ps-3 paraCol'>Python PIP</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNavSQL
import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VerticalNavSQL() {
  const navigate = useNavigate();
  function Navigate(){
    navigate("/sql/home");
  }


  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-3 pe-1 my-3 pe-5'>SQL Tutorial &nbsp; &nbsp;&nbsp; </h4>
                <div className="flex-column">
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate}>SQL HOME</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Intro</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Syntax To</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Select</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Select Distinct</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Where</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Order By</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL And</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL OR</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Not</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Insert Info</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Null Values</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Update</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Delete</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Select Top</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Min and Max</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Count</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Sum</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Avg</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Like</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Wildcards</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL In</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Aliases</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Insert Into</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Join</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Union</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Case</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Null Function</p>
                    <p className='text-dark my-0 ps-3 paraCol'>SQL Comments</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNavSQL
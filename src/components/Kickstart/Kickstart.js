import React from 'react'
import { Button, Container} from 'react-bootstrap'

function Kickstart() {
  return (
    <Container fluid style={{backgroundColor: "#282a35" , position:"relative"}} className='py-5 px-5'>
        <Container className='d-flex flex-column justify-content-start my-5'>
            <h2 className='display-2 mb-5 font-weight-bold' style={{color: "#FFC0C7"}}>Kickstart your career</h2>
            <h2 className='display-4 mb-5 font-weight-bold' style={{color: "#FFC0C7"}}>Get Certified by completing a course</h2>
            <Container className='d-grid col-xs-12 d-sm-flex ps-0'>
                <Button className='rounded-pill btn-lg align-self-start px-sm-5 py-3 border-0' style={{backgroundColor:"#04AA6D"}}>Get started</Button>
            </Container> 
            <Container>
                <img src={require('./sm.png')} height={"100px"} alt='abc' style={{position: "absolute",top:"-40px", right:"70px"}} className='d-block d-sm-none'/>
                <img src={require('./md.png')} height={"160px"} alt='abc' style={{position: "absolute",bottom:"-51px", right:"70px"}} className='d-none d-sm-block d-md-none'/>
                <img src={require('./lg.png')} height={"180px"} alt='abc' style={{position: "absolute",bottom:"-52px", right:"70px"}} className='d-none d-md-block d-lg-none'/>
                <img src={require('./xl.png')} height={"250px"} alt='abc' style={{position: "absolute",bottom:"-75px", right:"70px"}} className='d-none d-lg-block'/>
            </Container>
        </Container>
    </Container>
  )
}

export default Kickstart

import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VerticalNavCss() {
  const navigate = useNavigate();
  function Navigate(){
    navigate("/css/home");
  }

  function Navigate2(){
    navigate("/css/intro");
  }

  function Navigate3(){
    navigate("/css/syntax");
  }

  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-3 pe-1 my-3 pe-5'>CSS Tutorial &nbsp; &nbsp;</h4>
                <div className="flex-column">
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate}>CSS HOME</p>
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate2}>CSS Introduction</p>
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate3}>CSS Syntax</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Selectors</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS How To</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Comments</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Colors</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Backgrounds</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Borders</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Margins</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Padding</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Height/Width</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Box Model</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Outline</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Text</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Fonts</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Icons</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Links</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Lists</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Tables</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Display</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Max-width</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Z-Index</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Overflow</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Float</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Inline-block</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Align</p>
                    <p className='text-dark my-0 ps-3 paraCol'>CSS Combinators</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNavCss
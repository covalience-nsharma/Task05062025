import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function VerticalNav() {
  const navigate = useNavigate();

  function Navigate(){
    navigate("/html/home");
  }

  function Navigate2(){
    navigate("/html/intro");
  }

  function Navigate3(){
    navigate("/html/editors");
  }

  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-3 pe-1 my-3 pe-5'>HTML Tutorial</h4>
                <div className="flex-column">
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate}>HTML HOME</p>
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate2}>HTML Introduction</p>
                    <p className='text-dark my-0 ps-3 paraCol' onClick={Navigate3}>HTML Editors</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Basic</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Elements</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Attributes</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Headings</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Paragraphs</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Styles</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Formatting</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Quotations</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Comments</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Colors</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML CSS</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Links</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Images</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Fevicons</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Page Title</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Tables</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Block & Inline</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Classes</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Id</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Iframes</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML javaScript</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML File Paths</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Head</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Layout</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Responsive</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Computercode</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Semantics</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Style Guide</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Entities</p>
                    <p className='text-dark my-0 ps-3 paraCol'>HTML Symbols</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNav

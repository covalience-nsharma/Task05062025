import React from 'react'
import { Button, Container ,Row, Col,Image} from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Html from '../../Main-languages/LanguagesCode/Html'

function ContentBoxEditor() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
    <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
        <h1 className='display-5 text-bold mt-4 mx-4'>HTML Editors</h1>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-2 pb-0 px-4'>
            <p>A simple text editor is all you need to learn HTML.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>Learn HTML Using Notepad or TextEdit</h2>
            <p>Web pages can be created and modified by using professional HTML editors.</p>
            <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
            <p>We believe that using a simple text editor is a good way to learn HTML.</p>
            <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>Step 1: Open Notepad (PC)</h2>
            <p style={{fontWeight:"bold"}}>Windows 8 or later:</p>
            <p>Open the <span style={{fontWeight:"bold"}}>Start Screen</span> (the window symbol at the bottom left on your screen). Type <span style={{fontWeight:"bold"}}>Notepad</span>.</p>
            <p style={{fontWeight:"bold"}}>Windows 7 or earlier:</p>
            <p>Open <span style={{fontWeight:"bold"}}>Start {">"} Programs {">"} Accessories {">"} Notepad</span></p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>Step 1: Open Notepad (Mac)</h2>
            <p>Open <span style={{fontWeight:"bold"}}>Finder {">"} Applications {">"} TextEdit</span></p>
            <p>Also change some preferences to get the application to save files correctly. In <span style={{fontWeight:"bold"}}>Preferences {">"} Format {">"}</span> choose <span style={{fontWeight:"bold"}}>"Plain Text"</span></p>
            <p>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>
            <p style={{fontWeight:"bold"}} >Then open a new document to place the code.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mt-4 mb-4'>Step 2: Write Some HTML</h2>
            <p>Write or copy the following HTML code into Notepad:</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc py-4'>
                    <Html/>
                </Col>
            </Row> 
            <Container className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Image fluid src="https://www.w3schools.com/html/img_notepad.png" />
            </Container>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>Step 3: Save the HTML Page</h2>
            <p>Save the file on your computer. Select File {">"} Save as in the Notepad menu.</p>
            <p>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</p>
            <Container className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Image fluid src="https://www.w3schools.com/html/img_saveas.png" />
            </Container>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>Step 4: View the HTML Page in Your Browser</h2>
            <p>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
            <p>The result will look much like this:</p>
            <Container className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Image fluid src="https://www.w3schools.com/html/img_chrome.png" />
            </Container>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Container fluid className='pt-3 pb-2 px-4'>
            <h2 className='mb-4'>W3Schools Online Editor - "Try it Yourself"</h2>
            <p>With our free online editor, you can edit the HTML code and view the result in your browser.</p>
            <p>It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:</p>
            <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                <Col xs={12} className='abc'>
                    <h4 className='my-4 mx-1'>Example:</h4>
                    <Html/>
                    <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
                </Col>
            </Row> 
            <p style={{fontWeight:"bold"}}>Click on the "Try it Yourself" button to see how it works.</p>
        </Container>
        <hr className='ms-lg-2 me-lg-5'/>
        <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
        <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
      </Container>
      <Footer />
    </Container>
  )
}

export default ContentBoxEditor
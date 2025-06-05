import { Button, Container ,Row, Col} from 'react-bootstrap'
import Footer from '../../Footer/Footer'

function SQLContent() {
  return (
    <Container fluid className='pe-0 media' style={{paddingTop:"100px"}}>
        <Container fluid className='ps-lg-3 ms-lg-5 ps-md-2 ms-md-5 m-sm-0 p-sm-0 m-xs-0 p-xs-0'>
            <h1 className='display-5 text-bold mt-4 mx-4'>SQL Tutorial</h1>
            <Button className='m-4' style={{backgroundColor: "#04AA6D",border:"none"}}>{"<"} Previous</Button>
            <Button className='my-4 media2' style={{backgroundColor: "#04AA6D",border:"none",float:'right'}}>Next {">"}</Button>
            <Container fluid className='pt-5 pb-4 px-4' style={{backgroundColor:"#d9eee1"}}>
                <p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
                <p>Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.</p>
              
                <p><Button style={{backgroundColor: "#04AA6D",border:"none"}}>Start learning SQL now {">>"}</Button></p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container fluid className='pt-3 pb-2'>
                <h2>Examples in Each Chapter</h2>

                <p className='mt-4 mb-4'>With our online SQL editor, you can edit the SQL statements, and click on a button to view the result.</p>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='abc'>
                        <h4 className='my-4 mx-1'>Example:</h4>
                        <Container fluid className='py-3' style={{backgroundColor:"white"}}>
                            <p className='mb-3'>SELECT * FROM CUSTOMERS; </p>
                        </Container>
                        <button className='rounded py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>

                    </Col>
                </Row> 
                <p>Click on the "Try it Yourself" button to see how it works.</p>
            </Container>
            <hr className='ms-2 me-5'/>
            <Container>
                <Row className='mb-4 ms-sm-0 me-sm-2 me-md-5 me-lg-5'>
                    <Col xs={12} className='bg-dark rounded pb-4'>
                        <h2 className='my-4 mx-1 text-light'>Test Yourself With Exercises</h2>
                        <Container className='bg-light pb-4'>
                            <h2 className='display-6 pt-3 mb-3'>Exercise:</h2>
                            <p className='mb-3'>Insert the missing statement to get all the columns from the Customers table..</p>
                            <Container className='p-2 mb-4' style={{backgroundColor:"#E7E9EB"}} fluid>
                                <p className='h5 my-3' style={{fontWeight:"400"}}>
                                 <span className='bg-light text-light'>_______</span> * FROM Customers;
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

export default SQLContent
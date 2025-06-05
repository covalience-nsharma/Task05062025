import React from 'react'
import { Row, Col, Container, Stack} from 'react-bootstrap';

function Mainlanguage(props) {
  return (
    <Container fluid style={{backgroundColor: props.color}}>
      
      <Row className='d-flex justify-content-center'>
        <Col lg={5} xxl={4} className='language mt-md-4'>
          <h1 className='display-1' style={{color: props.heading,fontWeight:"500px"}}>{props.name}</h1>
          <p className='h4 text-center' style={{color: props.heading}}>{props.def}</p>
          <Stack gap={4} className='mx-auto buttons'>
            <button className='rounded-pill p-2 But'>Learn {props.name}</button>
            <button className='rounded-pill p-2 But' style={{backgroundColor: props.col,color:props.colColor}}>{props.name} Reference</button>
            <button className='rounded-pill p-2 But'>Get Certified</button>
          </Stack>
        </Col>

        <Col lg={5} xxl={4} className='d-none d-sm-block'>
          <Row>
            <Col md={11} sm={10} className='abc ms-md-5 m-sm-5'>
              <h4 className='my-4 mx-1'>{props.name} Example:</h4>
              {props.ele}
              <button className='rounded-pill px-5 py-2 my-4 text-light' style={{backgroundColor: "#04AA6D",border:"none"}}>Try it Yourself</button>
            </Col>
          </Row> 
        </Col>
      </Row>

    </Container>
  )
}

Mainlanguage.defaultProps = {
  heading: "black",
  col: "#282A35",
  colColor:"white"
}

export default Mainlanguage;

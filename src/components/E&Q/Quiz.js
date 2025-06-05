import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Quiz() {
  return (
    <Container className='text-center text-light p-5' style={{backgroundColor: "#282a35"}} fluid>
        <h3 className='display-3 mt-4 mb-4'>Exercises and Quizzes</h3>
        <p className='h5 mb-5'>Test your skills!</p>
        <Row className='mx-auto d-flex justify-content-center'>
            <Col lg={5} className='my-3 mx-lg-3 px-3 rounded d-flex align-items-center' style={{backgroundColor: "#0ca56b",height:"180px"}}>
                <h2 className='mx-auto'>Exercises</h2>
            </Col>
            <Col lg={5}className='my-3 mx-lg-3 rounded d-flex align-items-center mb-5' style={{backgroundColor: "#f8eea0",height:"180px"}}>
                <h2 className='text-dark mx-auto'>Quizzes</h2>
            </Col>
        </Row>
    </Container>
  )
}

export default Quiz

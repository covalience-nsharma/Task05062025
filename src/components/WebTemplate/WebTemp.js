import React from 'react'
import { Button, Container, Image} from 'react-bootstrap'

function WebTemp() {
  return (
    <Container className='text-center py-5' style={{backgroundColor: "#e7e9eb"}} fluid>
        <Container className='d-grid col-lg-10 col-xs-12'>
            <h4 className='display-3 mt-5 mb-4'>Web Templates</h4>
            <p className='h5 mb-1'>Browse our selection of free responsive HTML Templates</p>
            <Image src='https://www.w3schools.com/w3css_templates.jpg' className='py-4' fluid></Image>
            <Container className='px-0 d-grid col-sm-6 col-md-8 col-lg-8 pb-5' fluid>
                <Button className='btn-lg text-light bg-dark border-0 rounded-pill'>Browse Templates</Button>
            </Container>
        </Container>
        
    </Container>
  )
}

export default WebTemp

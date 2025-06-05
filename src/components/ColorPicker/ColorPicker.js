import React from 'react'
import { Container, Image} from 'react-bootstrap'

function ColorPicker() {
  return (
    <Container className='text-center p-5' style={{backgroundColor: "#f3ecea"}} fluid>
        <h4 className='display-1 mt-5 mb-3'>Color Picker</h4>
        <p className='h5 mb-4'>W3Schools' famous color picker:</p>
        <Image src='https://www.w3schools.com/images/colorpicker.png' className='mt-1 mb-5'></Image>
    </Container>
  )
}

export default ColorPicker

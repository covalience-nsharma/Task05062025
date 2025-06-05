import React from 'react'
import { Button, Container, Image} from 'react-bootstrap'

function CodeGame() {
  return (
    <Container className='text-center p-5' style={{backgroundColor: "#96d4d4"}} fluid>
        <h4 className='display-3 mt-5 mb-3'>Code Game</h4>
        <p className='h2 mb-4'>Help the Lynx collect pine cones!</p>
        <Image src='https://www.w3schools.com/images/w3lynx_200.png' className='mt-1 mb-5'/><br/>
        <Button className='btn-lg text-light bg-dark border-0 rounded-pill p-2 mb-5' style={{width: "200px"}}>Play Game</Button>
    </Container>
  )
}

export default CodeGame

import React from 'react'
import { Button, Col} from 'react-bootstrap'

function LanguageBox(props) {
  const BoxStyle = {
    backgroundColor: props.color,
    height: "250px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "Center"
  }

  return (
      <Col xs={11} md={11} lg={5} style={BoxStyle} className='m-3 p-4 text-center'>
        <h2 className='display-5'>{props.name}</h2>
        <p>{props.desc}</p>
        <Button className='bg-dark text-light p-2 rounded-pill' style={{width: "200px",border:"none"}}>Learn {props.name}</Button>
      </Col>
  )
}

export default LanguageBox

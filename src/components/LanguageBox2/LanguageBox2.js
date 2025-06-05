import React from 'react'
import { Col } from 'react-bootstrap'
function LanguageBox2(props) {
    const BoxStyle = {
        backgroundColor: props.color,
        height: "150px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "Center"
      }
  return (
    <>
    <Col xs={11} lg={5} style={BoxStyle} className='m-3 p-4 text-center'>
       <h3>{props.name}</h3>
    </Col>
    </>
  )
}

export default LanguageBox2

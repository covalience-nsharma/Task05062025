import React from 'react'
import { Col } from 'react-bootstrap'

function LanguageBox3(props) {
    const BoxStyle = {
        backgroundColor: props.color,
        height: "120px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "Center"
      }
  return (
    <>
    <Col xs={11} sm={5} lg={2} style={BoxStyle} className='m-xl-5 m-lg-4 m-md-4 m-sm-3 m-3 text-center'>
       <h3 >{props.name}</h3>
    </Col>
    </>
  )
}

export default LanguageBox3
import React from 'react'
import { Col } from 'react-bootstrap'
import colors from '../Colors';

function PY() {
  return (
    <Col style={{...colors.bg,height: "240px"}}>
       <span style={colors.bl}>if </span><span style={colors.rd}>5 </span><span>{">"}</span><span style={colors.rd}> 2</span>:<br/>
       <span>&emsp; print(</span><span style={colors.br}>"Five is greater than two!"</span><span>)</span>
    </Col>
  )
}

export default PY;

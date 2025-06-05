import React from 'react'
import { Col } from 'react-bootstrap'
import colors from '../Colors';

function SQL() {
  return (
    <Col style={{...colors.bg,height: "240px"}}>
       <span style={colors.bl}>SELECT</span><span> * </span><span style={colors.bl}>FROM </span>Customers<br/>
       <span style={colors.bl}>WHERE</span><span> Country=</span><span style={colors.br}>'Mexico'</span> ;
    </Col>
  )
}

export default SQL

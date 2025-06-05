import React from 'react'
import {Col} from 'react-bootstrap';
import colors from '../Colors';

function Css() {
  return (
    <Col style={colors.bg}>
        <p><span style={colors.br}>body</span> {"{"} <br/> <span style={colors.rd}>&emsp; background-color</span>: <span style={colors.bl}>lightblue</span>; <br /> {"}"} <br/></p>
        <p><span style={colors.br}>h1</span> {"{"} <br/> <span style={colors.rd}>&emsp; color</span>: <span style={colors.bl}>white</span>; <br/> <span style={colors.rd}>&emsp; text-align</span>: <span style={colors.bl}>center</span>; <br/> {"}"}<br/></p>
        <p><span style={colors.br}>p</span> {"{"} <br/> <span style={colors.rd}>&emsp; font-family</span>: <span style={colors.bl}>verdena</span>; <br/> {"}"}</p>
    </Col>
  )
}

export default Css;

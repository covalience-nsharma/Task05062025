import React from 'react'
import Col from 'react-bootstrap/Col';
import colors from '../Colors';

function JS() {
  return (
    <Col style={{...colors.bg,height:"267px"}}>
        <p>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>button</span><span style={colors.rd}> onclick</span>
            <span style={colors.bl}>="myFunction()"</span><span style={colors.bl}>{">"}</span><span style={{color: "black"}}>Click Me!</span>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/button</span><span style={colors.bl}>{">"}</span><br/>
        </p>
        <p>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>script</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>function </span><span>myFunction() {"{"}</span><br/>
            <span style={colors.bl}>&emsp; let</span><span> x = </span>
            <span>document.getElementById(</span><span style={colors.br}>"demo"</span><span>);</span><br/>
            <span>&emsp; x.style.fontSize = </span><span style={colors.br}>"25px"</span><span>;</span><br/>
            <span>&emsp; x.style.color = </span><span style={colors.br}>"red"</span><span>;</span><br/>
            {"}"}<br/>    
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/script</span><span style={colors.bl}>{">"}</span><br/>
        </p>
    </Col>
  )
}

export default JS;

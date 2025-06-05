import React from 'react'
import Col from 'react-bootstrap/Col';
import colors from '../Colors';

function Html() {
  return (
    <Col style={colors.bg}>
        <p>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>!DOCTYPE</span><span style={colors.rd}> html</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>html</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>head</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>title</span><span style={colors.bl}>{">"}</span><span>HTML Tutorial</span>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/title</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/head</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>body</span><span style={colors.bl}>{">"}</span><br/>
        </p>
        <p>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>h1</span><span style={colors.bl}>{">"}</span><span>This is a heading</span>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/h1</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>p</span><span style={colors.bl}>{">"}</span><span>This is a paragraph.</span>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/p</span><span style={colors.bl}>{">"}</span><br/>
        </p>
        <p>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/body</span><span style={colors.bl}>{">"}</span><br/>
            <span style={colors.bl}>{"<"}</span><span style={colors.br}>/html</span><span style={colors.bl}>{">"}</span><br/>
        </p>
    </Col>
  )
}

export default Html;

import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LanguageBox2 from './LanguageBox2'
import { Info } from './LanguageBox2Info';

function LanguageBox2Render() {
  return (
    <Container fluid style={{backgroundColor: "#272934"}}>
      <Row className='d-flex justify-content-center'>
        {Info.map(lang => {
            return (
                <LanguageBox2
                name={lang.name}
                color={lang.color}
                key={lang.id}
                />
            );
        })}
      </Row>
    </Container>
  )
}

export default LanguageBox2Render;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Info3 } from './LanguageBox2Info';
import LanguageBox3 from './LangugeBox3';

function LanguageBox2Render2() {
  return (
    <Container fluid style={{backgroundColor: "#272934"}}>
      <Row className='mx-0 mx-lg-1 d-flex justify-content-center'>
        {Info3.map(lang => {
            return (
                <LanguageBox3
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

export default LanguageBox2Render2;
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LanguageBox from './LanguageBox'
import Info from './LanguageInfo';

function LanguagesRender() {
  return (
    <Container fluid style={{backgroundColor: "#272934"}}>
      <Row className='py-5 d-flex justify-content-center'>
        {Info.map(lang => {
            return (
                <LanguageBox
                name={lang.name}
                desc={lang.desc}
                color={lang.color}
                key={lang.id}
                />
            );
        })}
      </Row>
    </Container>
  )
}

export default LanguagesRender;

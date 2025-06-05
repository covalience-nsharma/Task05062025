import React from 'react'
import Navbar from "../navbar/Navbar";
import VerticalNavCss from '../VerticalnavCss/VerticalnavCss';
import SyntaxCSS from '../CSSPageContent/SyntaxCSS/SyntaxCSS';


function CssSyntax() {
  return (
    <div>
        <Navbar />
        <VerticalNavCss />
        <SyntaxCSS />
    </div>
  )
}

export default CssSyntax
import React from 'react'
import Navbar from "../navbar/Navbar";
import VerticalNavCss from '../VerticalnavCss/VerticalnavCss';
import ContentBoxCss from '../CSSPageContent/ContentBoxCss/ContentBoxCss';


function CssPage() {
  return (
    <div>
        <Navbar />
        <VerticalNavCss />
        <ContentBoxCss />
    </div>
  )
}

export default CssPage
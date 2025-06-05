import React from 'react';
import Navbar from "../navbar/Navbar";
import VerticalNav from '../verticalNav/verticalNav';
import ContentBoxIntro from '../HTMLPageContent/ContentIntro/ContentBoxIntro';

function HtmlIntro() {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <ContentBoxIntro />
    </div>
  )
}

export default HtmlIntro

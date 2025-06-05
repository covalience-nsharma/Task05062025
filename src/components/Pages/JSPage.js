import React from 'react'
import Navbar from "../navbar/Navbar";
import ContentBoxJS from '../JSPageContent/ContentBoxJs/ContentBoxJS';
import VerticalNavJS from '../VerticalnavJs/VerticalnavJs';


function JSPage() {
  return (
    <div>
        <Navbar />
        <VerticalNavJS />
        <ContentBoxJS />
    </div>
  )
}

export default JSPage
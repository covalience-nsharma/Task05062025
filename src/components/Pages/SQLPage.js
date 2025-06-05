import React from 'react'
import Navbar from "../navbar/Navbar";
import VerticalNavSQL from '../VerticalNavSQl/VerticalnavSQL';
import SQLContent from '../SQLPageContent/SQLContent/SQLContent';


function SQLPage() {
  return (
    <div>
        <Navbar />
        <VerticalNavSQL />
        <SQLContent />
    </div>
  )
}

export default SQLPage
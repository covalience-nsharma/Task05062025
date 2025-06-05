import React from 'react'
import Navbar from "../navbar/Navbar";
import VerticalNavPy from '../VerticalNavPy/VerticalNavPy';
import PYContent from '../ContentBoxPy/PYContent/PYContent';


function PythonPage() {
  return (
    <div>
        <Navbar />
        <VerticalNavPy />
        <PYContent />
    </div>
  )
}

export default PythonPage
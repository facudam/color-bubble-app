import React, { useState } from 'react'
import { Bubble } from './Bubble'
import { ColorInput } from './ColorInput'

export const ColorBubblesApp = () => {

  const [colorVar, setColorVar ] = useState('#558581')

  document.documentElement.style.setProperty('--bubble-color', colorVar);
  
  const changeColorVar = (colorInput) => {
    setColorVar(colorInput);
    
  }

  

  return (
    <>
      <header>
        <h1>¡Bienvenidos a Color Bubble App!</h1>
        <p>Aquí podras escoger el color de la burbuja principal y a través de useEffect verás unas animaciones especiales</p>
      </header>
      <Bubble />
      <ColorInput />
        
    </>
  )
}

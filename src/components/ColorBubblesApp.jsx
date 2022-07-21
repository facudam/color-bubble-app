import React, { useState } from 'react'
import { Bubble } from './Bubble'
import { ColorInput } from './ColorInput'

export const ColorBubblesApp = () => {

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

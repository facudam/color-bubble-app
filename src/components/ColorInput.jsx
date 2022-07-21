import React, { useState } from 'react'

export const ColorInput = () => {

    const [ color, setColor ] = useState('#558581')

    document.documentElement.style.setProperty('--bubble-color', color);

    const changeInputColor = (e) => {
        let colorValue = e.target.value;
        setColor(colorValue); 
    }


  return (
      <div className='input-container'>
        <span>Escoge el color del globo</span>
        <input 
            type='color' 
            value={ color }
            onInput={ changeInputColor}
        />
      </div>
    
  )
}

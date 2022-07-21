import React, { useState } from 'react'

export const ColorInput = ({ colour }) => {

    const [ color, setColor ] = useState('#558581')

    const changeInputColor = (e) => {
        let colorValue = e.target.value;
        setColor(colorValue);
        colour(color)
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

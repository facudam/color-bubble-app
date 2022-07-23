import React, { useState, useEffect } from 'react'
import { BubblesContainer } from './BubblesContainer';

export const ColorInput = () => {

    const [ color, setColor ] = useState('#558581');
    const [ clikeado, setClickeado ] = useState(0);

    const [ containerIsActive, setContainerIsActive ] = useState(false);

   

    useEffect(() => {
    console.log(`UseEffect ejecutado, ${clikeado}`)
    const modificarState = setTimeout(() => {
      setContainerIsActive(false)
    },5000)
    
  }, [ clikeado ])

    document.documentElement.style.setProperty('--bubble-color', color);

    const changeInputColor = (e) => {
        let colorValue = e.target.value;
        setColor(colorValue);
        setClickeado( clikeado + 1 );
        setContainerIsActive(true)
        
    }


  return (
      <div className='input-container'>
        <span>Escoge el color del globo</span>
        <input 
            type='color' 
            value={ color }
            onInput={ changeInputColor}
        /> 
        {
          containerIsActive ? <BubblesContainer /> : null
        }
        
        
      </div>
    
  )
}

import React, { useState, useEffect } from 'react'
import { BubblesContainer } from './BubblesContainer';

export const ColorInput = () => {

  let numeroActivo = false;

    const [ color, setColor ] = useState('#558581');
    const [ clikeado, setClickeado ] = useState(0);

    useEffect(() => {
    console.log(`UseEffect ejecutado, ${clikeado}`)
    
  }, [clikeado])

    document.documentElement.style.setProperty('--bubble-color', color);

    const changeInputColor = (e) => {
        let colorValue = e.target.value;
        setColor(colorValue);
        setClickeado( clikeado + 1 );
        numeroActivo = true;
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
          numeroActivo ? <BubblesContainer /> : ''
        }
        
        
      </div>
    
  )
}

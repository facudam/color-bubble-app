import React from 'react'
import { BubbleTranslate } from './BubbleTranslate'
import { BubbleTransparent } from './BubbleTransparent'
import { OtherBubbleTranslate } from './OtherBubbleTranslate'

export const BubblesContainer = () => {
  return (
    <div className='bubble-container'>
        <BubbleTransparent />
        <BubbleTranslate />
        <OtherBubbleTranslate />
    </div>
  )
}

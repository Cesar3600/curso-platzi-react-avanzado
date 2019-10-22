
import React from 'react'
import { Anchor, Imagen } from './styles'

const IMG_DEFAULT = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = IMG_DEFAULT, path, emoji='?' }) => {
  return(
    <Anchor href={path}>
        <Imagen src={cover}/>
        {emoji}
    </Anchor>
  )
}

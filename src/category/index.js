
import React from 'react'

const IMG_DEFAULT = 'https://imgur.com/dJa0Hpl'

export const Category = ({cover = IMG_DEFAULT,path}) => {
  return(
    <a href={path}>
        <img src={cover}/>
    </a>
  )
}




import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotocards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => <li key={id}><PhotoCard /></li>)
      }
    </ul>
  )
}

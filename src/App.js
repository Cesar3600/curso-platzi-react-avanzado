import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { PhotoCard } from './components/PhotoCard'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </>
  )
}

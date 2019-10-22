import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotocards } from './components/listOfPhotocards'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotocards />
    </>
  )
}

import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotocards } from './components/listOfPhotocards'
import { Logo } from './components/logo'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotocards />
    </>
  )
}

import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { ListOfPhotocards } from './components/listOfPhotocards'
import { Logo } from './components/logo'
// import { Contador1 } from './components/contador1'
import { Contador1 } from './components/contador1'

export const App = () => {
  return (
    <>
      <Contador1 />
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotocards />
    </>
  )
}

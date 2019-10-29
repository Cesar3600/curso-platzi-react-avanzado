
import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  useEffect(
    () => {
      window.fetch('https://petgram-server.ccm.now.sh/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(err => console.log(err))
    }, []
  )
  return { categories }
}

export const ListOfCategories = () => {
  const { categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(true)

  useEffect(
    () => {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      window.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scrol', onScroll)
    }, [showFixed]
  )

  const renderList = (fixeder) => {
    return (
      <Lista fixed={fixeder}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </Lista>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

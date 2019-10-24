
import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(
    () => {
      window.fetch('https://petgram-server.ccm.now.sh/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(err => console.log(err))
    }, []
  )

  return (
    <Lista>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </Lista>
  )
}

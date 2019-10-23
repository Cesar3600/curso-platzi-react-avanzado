
import React, { useState } from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategory] = useState(mockCategories)
  return (
    <Lista>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </Lista>
  )
}

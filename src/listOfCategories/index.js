
import React from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'
import { categories } from '../../api/db.json'

export const ListOfCategories = () =>
  <Lista>
    {
      categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
    }
  </Lista>

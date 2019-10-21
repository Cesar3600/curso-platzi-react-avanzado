
import React from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'

export const ListOfCategories = () =>
  <Lista>
    {
      [1, 2, 3, 4, 5].map(category => <Item key={category}><Category /></Item>)
    }
  </Lista>

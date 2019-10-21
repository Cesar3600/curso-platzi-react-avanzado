
import React from 'react'
import { Category } from '../category'

export const ListOfCategories = () =>
  <ul>
    {
      [1, 2, 3].map(category => <li key={category}><Category /></li>)
    }
  </ul>

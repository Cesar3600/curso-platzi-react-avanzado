
import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { Lista, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(
    () => {
      setLoading(true)
      window.fetch('https://petgram-server.ccm.now.sh/categories')
        .then(response => response.json())
        .then(
          data => {
            setCategories(data)
            setLoading(false)
          })
        .catch(err => console.log(err))
    }, []
  )
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
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
          loading ? <Item key='loading'><Category /></Item> : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </Lista>
    )
  }

  if (loading) {
    return 'cargando'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

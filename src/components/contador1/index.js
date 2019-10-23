
import React, { useState } from 'react'

export const Contador1 = () => {
  const [numero, setNumero] = useState(0)
  return (
    <>
      <h2>{numero}</h2>
      <button onClick ={() => setNumero(numero + 1)}>Aumentar+</button>
      <button onClick ={() => setNumero(numero - 1)}>Disminuir-</button>
    </>
  )
}

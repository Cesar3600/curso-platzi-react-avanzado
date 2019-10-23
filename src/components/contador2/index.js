
import React from 'react'

class Contador2 extends React.Component {
  constructor () {
    super()
    this.state = {
      num: 0
    }
  }

  render () {
    const { num } = this.state
    return (
      <>
        <h3>{num}</h3>
        <button onClick={() => this.setState({ num: num + 1 })}>Aumentar</button>

      </>
    )
  }
}
export default Contador2

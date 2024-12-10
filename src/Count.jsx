import React from 'react'

export default function Count({countPlus, countMinus}) {
  return (
    <div>
          <button onClick={countPlus}>+5</button>
          <button onClick={countMinus}>-5</button>
    </div>
  )
}

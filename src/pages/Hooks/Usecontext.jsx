import React, { Component, useState, createContext, useContext } from 'react'

function A(props) {
  let [count, setCount] = useState(10)
  const CountContext = createContext()
  return (
    <CountContext.Provider value={count}>
      <B />
    </CountContext.Provider>
  )
}


function B(props) {

  let count = useContext(CountContext)
  return (
    <h2>
      {count}
    </h2>
  )
}
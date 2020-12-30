import React from 'react'
import ContextApi from '../contextApi'
import {useContext} from 'react'
function Context() {
  let value = useContext(ContextApi)
  return (
    <h2>Context value is {value}</h2>
  )
}

export default Context

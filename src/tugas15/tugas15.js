import React from "react"
import {BuahProvider} from "./buahContext"
import BuahList from "./buahList"
import BuahForm from "./buahForm"

const Buah = () =>{
  return(
    <BuahProvider>
      <BuahList/>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Buah;
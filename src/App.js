import React, { useContext } from 'react'
import { MyContext } from '../src/context/index'
import Stage1 from "./components/stage_1"
import Stage2 from "./components/stage_2"
import './style/app.css'

const App = () => {
  const context=useContext(MyContext)
  console.log(context)
  return(
    <div>
      <h1>Welcome to Splitbillz</h1>
      { context.state.stage ===1 ? <Stage1 /> : <Stage2/> }
    </div>
  )
}

export default App
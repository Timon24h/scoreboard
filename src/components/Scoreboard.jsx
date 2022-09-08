import React, {useContext} from 'react'
import {ScoreContext} from '../context/scoreContext'

function Scoreboard() {

  const {score} = useContext(ScoreContext) 
  const {plusScore} = useContext(ScoreContext) 
  const {minusScore} = useContext(ScoreContext) 


  return (
    <div>
        <h2>Your Current Score is {score}</h2>
        <button onClick={plusScore}> + </button>
        <button onClick={minusScore}> - </button>
        {score > 100 ? <h3>Good job!</h3> : <h3>"Let's make it over 100!"</h3>}
    </div>
  )
}

export default Scoreboard
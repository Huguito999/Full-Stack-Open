import { useState } from 'react'
import Statistics from './Statistics'
import Buttons from './Buttons'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handleGoodClick = () => {
    const updateGood = good + 1
    const newAll = updateGood + neutral + bad
    setGood(updateGood)
    setAll(newAll)
    setAverage((updateGood - bad) / newAll)
    setPositive(updateGood*100/newAll)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    const newAll = good + updateNeutral + bad
    setNeutral(updateNeutral)
    setAll(newAll)
    setAverage((good - bad) / newAll)
    setPositive(good*100/newAll)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    const newAll = good + neutral + updateBad
    setBad(updateBad)
    setAll(newAll)
    setAverage((good - updateBad) / newAll)
    setPositive(good*100/newAll)
  }

  

  return (
   
    <div>
      <h1>give feedback</h1>
      <Buttons text="good" handleClick={handleGoodClick} />
      <Buttons text="neutral" handleClick={handleNeutralClick} />
      <Buttons text="bad" handleClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App

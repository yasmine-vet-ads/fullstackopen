import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
  return <p>No feedback given</p>
}
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
<StatisticLine text="neutral" value={props.neutral} />
<StatisticLine text="bad" value={props.bad} />
<StatisticLine text="all" value={props.total} />
<StatisticLine text="average" value={props.average} />
<StatisticLine text="positive" value={`${props.positive} %`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

const average = total === 0
  ? 0
  : (good - bad) / total

const positive = total === 0
  ? 0
  : (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>

      <Button
  handleClick={() => setGood(good + 1)}
  text="good"
/>
      <Button
  handleClick={() => setNeutral(neutral + 1)}
  text="neutral"
/>

      <Button
  handleClick={() => setBad(bad + 1)}
  text="bad"
/>

      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
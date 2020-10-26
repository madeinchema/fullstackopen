import { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackButton = ({ value, feedbackFunc }) => {
  const handleFeedback = () => feedbackFunc();

  return (
    <button onClick={handleFeedback}>{value}</button>
  )
}

const Feedback = ({ feedback }) => {
  const { setGood, setNeutral, setBad } = feedback;

  return (
    <div>
      <h1>Give feedback</h1>
      <FeedbackButton value={'good'} feedbackFunc={() => setGood(s => s + 1)}/>
      <FeedbackButton value={'neutral'} feedbackFunc={() => setNeutral(s => s + 1)}/>
      <FeedbackButton value={'bad'} feedbackFunc={() => setBad(s => s + 1)}/>
    </div>
  )
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{text === 'average' || text === 'positive' ? `${value}%` : value}</td>
  </tr>
);

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;

  const average = (Object.values(stats).reduce((acc, cur) => {
    return acc + cur
  }) / Object.keys(stats).length).toFixed(2);

  const positive = ((good) / (good + neutral + bad) * 100).toFixed(2);

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text={'good'} value={good}/>
          <Statistic text={'neutral'} value={neutral}/>
          <Statistic text={'bad'} value={bad}/>
          <Statistic text={'average'} value={average}/>
          <Statistic text={'positive'} value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
     <Feedback feedback={{setGood, setNeutral, setBad}}/>
     <Statistics stats={{good, neutral, bad}}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

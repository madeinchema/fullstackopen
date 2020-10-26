import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => anecdotes.reduce((obj, curr, idx) => {
    obj[idx] = 0;
    return obj
  }, {}));
  const [mostVoted, setMostVoted] = useState({
    anecdoteIdx: null,
    votes: null,
  });

  // Sets the mostVoted after every vote happens
  useEffect(() => {
    for (const vote in votes) {
      if (votes[vote] > mostVoted.votes) {
        setMostVoted({
          anecdoteIdx: vote,
          votes: votes[vote],
        })
      }
    }
  }, [votes]);

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const voteAnecdote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    })
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <hr/>
      <p>Has {votes[selected]} votes</p>
      <hr/>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next anecdote</button>
      <hr/>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[mostVoted.anecdoteIdx]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root'),
)

import ReactDOM from 'react-dom'

const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ course }) => (
  <>
    <Part part={course.parts[0]}/>
    <Part part={course.parts[1]}/>
    <Part part={course.parts[2]}/>
  </>
)

const Part = ({ part }) => (
  <div>
    <h3>{part.name}</h3>
    <p>{part.exercises} exercises.</p>
  </div>
)

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((total, currentValue) => {
    return total + currentValue.exercises
  }, 0)
  console.log(totalExercises)
  return <p>Number of exercises {totalExercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

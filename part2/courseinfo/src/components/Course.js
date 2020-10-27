const Header = ({ course }) => <h2>{course.name}</h2>

const Content = ({ course }) => (
  <>
    {course.parts.map(part => <Part part={part} />)}
  </>
)

const Part = ({ part }) => (
  <div style={{ margin: '1em'}}>
    <h3 style={{ marginBottom: '.25em' }}>{part.name}</h3>
    <p style={{ margin: '0'}}>{part.exercises} exercises.</p>
  </div>
)

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((total, currentValue) => {
    return total + currentValue.exercises
  }, 0)
  console.log(totalExercises)
  return <p style={{ fontWeight: 'bold'}}>Total number of exercises: {totalExercises}</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
};

export default Course;

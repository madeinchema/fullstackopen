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
  return <p style={{ fontWeight: 'bold'}}>Total number of exercises: {totalExercises}</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
};

export default Course;

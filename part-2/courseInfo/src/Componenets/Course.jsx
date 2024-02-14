const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>
const Course = ({course})=>{

    const total = course.parts.reduce((acc,curr)=>{
      return acc + curr.exercises;
    },0)
    console.log(total)
    return(
      <>
        <Header course={course.name}></Header>
        <div>
          {course.parts.map(part => <Part key ={part.id} part ={part}></Part>)}
        </div>
        <Total sum ={total}/>
  
      </>
    )
  
  }

export default Course
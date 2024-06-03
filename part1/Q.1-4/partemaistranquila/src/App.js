const Header= (course)=>{
  return(    
    <div>
      <h1>{course.title}</h1>
    </div>
)
}
const Content = (course)=>{
  return(    
    <div>
      <p>  {course.part} {course.content}</p>
    </div>
)
}

const Part = (props)=>{
  return(    
    <div>
      <p>  {props.req.part} {props.req.exercises}</p>
    </div>
)
}

const Content2 = (props)=>{
  return(    
    <div>
     <Part  req={props.array[0]} />
     <Part  req={props.array[1]} />
     <Part  req={props.array[2]} />
    </div>
)
}
const Content3 = (props)=>{
  return(    
    <div>
     {props.array.map( (part) => <Part  req={part} />)}
    </div>
)
}

const Total = (course)=>{
  return(    
    <div>
      <p>
        {course.content} {course.number}
      </p>
    </div>
)
}

const Total2 = (course)=>{
  return(    
    <div>
      <p> {"Number of exercises "} 
        {course.number[0].exercises  + course.number[1].exercises + course.number[2].exercises}
      </p>
    </div>
)
}



const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const part1 = 'Fundamentos da biblioteca React';
  const exercises1 = 10;
  const conteudo = [
   {part: 'Fundamentos da biblioteca React', exercises: 10},
   {part: 'Usando props para passar dados', exercises: 7},
   {part:  'Estado de um componente', exercises: 14}
  ]
  return (
    <div>
      <Header title = {course}/>
      <Content part = {part1} content = {exercises1}/>
      <Content2 array = {conteudo}/>
      <Content3 array = {conteudo}/>
      <Total content="Number of exercises" number={333}/>
      <Total2 number={conteudo}/>
    </div>
  )
}

export default App
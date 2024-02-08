import { useState } from "react";

const StatisticLine =({text,value})=>{
  return (
    <tr>
      <td> <strong>{text}</strong></td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props)=>{
  console.log(props);
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const Statistics = (props)=>{
  if(props.feedback){
    const all = props.good*1 + props.neutral*0 + props.bad*-1 
    const average =(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good+props.bad+props.neutral) ;
    const positive =(props.good*100)/(props.good+props.bad+props.neutral);
    return(
      <div>
        
        <h2>{props.name}</h2>
        <table>
          <tbody>
            <StatisticLine text ="good" value ={props.good}></StatisticLine>
            <StatisticLine text ="neutral" value={props.neutral} />
            <StatisticLine text ="bad" value={props.bad} />
            <StatisticLine text ="all" value={all} />
            <StatisticLine text ="average" value={average} />
            <StatisticLine text ="positive" value={positive} />
          </tbody>
        </table>
      </div>
  )
  }else{
    return (
      <div>
        <h2>{props.name}</h2>
        <h3> No feedback given</h3>
      </div>
    )
  }
  
}

const App = ()=>{
  const [good,SetGood ] = useState(0);
  const [neutral,SetNeutral ] = useState(0);
  const [bad,setBad ] = useState(0);
  const [feedback,setFeedback] = useState(false)

  const handelClick  =(name)=>{
    if (name == "good"){
      SetGood(good+1)
    }else if(name == "neutral"){
      SetNeutral(neutral+1)
    }else if(name == "bad"){
      setBad(bad+1)
    }
    setFeedback(true)
    
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick ={()=>handelClick("good")} name = {"good"}/>
      <Button onClick ={()=>handelClick("neutral")} name = {"neutral"}/>
      <Button onClick ={()=>handelClick("bad")} name = {"bad"}/>

      <Statistics feedback={feedback} name ={"statsitics"}good ={good} bad ={bad} neutral ={neutral}/>

      
      
    </div>
  )
}


export default App;
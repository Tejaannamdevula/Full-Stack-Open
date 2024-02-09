import { useState } from 'react'


const App = ()=>{

  const generateRandomInt=(anecdote) =>{
    return Math.floor(Math.random()*(anecdote.length -1));
  }

  const handleClick= (anecdote)=>{
      const newSelectedIndex= generateRandomInt(anecdote);
      console.log("tt",newSelectedIndex)

      setSelected(newSelectedIndex)
  }

  const handleVoteClick = ()=>{
    const newVotes = {...votes}
    newVotes.table[selected] += 1;
    if (newVotes.table[selected] > newVotes.max){
        newVotes.max = newVotes.table[selected];
        newVotes.index = selected
    }
    console.log("rrr",newVotes.max)
    console.log("ttt",newVotes.index)

    setVotes(newVotes);
  }
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [selected,setSelected] = useState(0);
  const [votes, setVotes] = useState({table:[0,0,0,0,0,0,0],max:0,index:0})
  return(
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has votes {votes.table[selected]}</p>
        <button onClick={()=>handleClick(anecdotes)}>next anecdote</button>
        <button onClick={()=>handleVoteClick()}>vote</button>
      </div>
      <div>
      <h1>Anecdote with most votes</h1>
        <p>{anecdotes[votes.index]}</p>
        <p>has votes {votes.max}</p>
      </div>
    </>
  )
}

export default App

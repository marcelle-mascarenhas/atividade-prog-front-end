import { useState } from "react";
import { Tweet } from "./components/Tweet"
import './App.css';


function App(): JSX.Element {
  
  const [tweets, seTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet (){
    seTweets([...tweets, 'Tweet 5'])

  }
  return (
   
    <div>
       <h1>Atividade 1 | Programação Front-End</h1>
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      })}
     
    
      <button onClick={createTweet}>Adicionar tweet</button>
    </div>

  );
}

export default App

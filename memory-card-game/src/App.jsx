import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './comp/Cards/Cards'

function App() {
  const [cardNumbers,setCardNumbers] = useState([1,1,2,2,3,3,4,4,5,5,6,6].sort(() => Math.random() - 0.5))
  const [score, setScore]= useState({
    player1: 0,
    player2: 0
  })
  const [gameData, setGameData] = useState({
    noOfMoves: 12,
    playerStatus: 'player1',
    cardClicked: []
  })
  console.log(gameData.playerStatus)
  useEffect(()=>{
    const movesLeft = gameData.noOfMoves
    if(movesLeft== 0){
      if (score.player1>score.player2){
        console.log(`${score.player1} Player 1 wins`)
      }
      if(score.player1<score.player2){
        console.log(`${score.player2} Player 2 wins`)
      }
    }
    if (movesLeft%2==0 && movesLeft != 20 && movesLeft!=0){
      if(gameData.cardClicked.length=== 2){
        if(gameData.cardClicked[0]== gameData.cardClicked[1]){
          if (gameData.playerStatus=== 'player1'){

            setScore((prevScore)=> ({...prevScore, player1: prevScore.player1+1 }))
          }
          else{
            setScore((prevScore)=> ({...prevScore, player2: prevScore.player2+1 }))
          }
        }
        setGameData((prevData)=> ({...prevData, cardClicked: []}))
        setGameData((prevData)=>({...prevData, playerStatus: prevData.playerStatus==='player1'?'player2':'player1'}) )
      }
      
    }
    
    console.log(gameData.noOfMoves)
    console.log(gameData.cardClicked)
    
  },[gameData.noOfMoves])
 const handleCardClick = function(cardNo){
    setGameData((prevData)=> ({...prevData, noOfMoves: prevData.noOfMoves-1}))
    setGameData((prevData)=> ({...prevData, cardClicked: [...prevData.cardClicked,cardNo]}))
 }
 
  return (
    <>
    {gameData.noOfMoves==0? <h1>{gameData.playerStatus} wins</h1>:<div>
    <h1>{gameData.playerStatus}</h1>
    <h2>Player 1: {score['player1']}</h2>
    <h2>Player 2: {score['player2']}</h2>
    <ul className='card-list'>{
      cardNumbers.map((cardNo,index)=>{
       return <li key={index} onClick={()=>handleCardClick(cardNo)}><Cards >{cardNo}</Cards></li>
       
      })}
      </ul>
    </div>
    }

    
    
    
      
    </>
  )
}

export default App

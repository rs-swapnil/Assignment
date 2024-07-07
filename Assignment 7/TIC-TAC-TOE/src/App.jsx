import Cell from "./components/Cell"
import './App.css'
import { useState,useEffect } from "react"
export default function App() {
  const [board, setBoard] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [player, setPlayer] = useState("X")
  const [winner,setWinner]=useState(null)

  function flipPlayer() {
    if (player == "X") {
      setPlayer("O")
    }
    else {
      setPlayer("X")
    }
  }

  function handlePlay(index) {
    if(winner != null )
    {
      alert("Game over please restart")
      return;
    }
    if (board[index] == " ") {
      let newBoard = [...board]
      newBoard[index] = player
      setBoard(newBoard)
      flipPlayer()
    }
    else {
      alert("Don't cheat")
    }

  }
  function checkWin(value)
  {
    if(board[0] == value && board[1] == value && board[2] == value )
    return true;
    if(board[3] == value && board[4] == value && board[5] == value )
      return true;
    if(board[6] == value && board[7] == value && board[8] == value )
      return true;
    if(board[0] == value && board[3] == value && board[6] == value )
      return true;
    if(board[1] == value && board[4] == value && board[7] == value )
      return true;
    if(board[2] == value && board[5] == value && board[8] == value )
      return true;
    if(board[0] == value && board[4] == value && board[8] == value )
      return true;
    if(board[2] == value && board[4] == value && board[6] == value )
      return true;
    return false;
  }
  useEffect(() =>{
    let x = checkWin("X")
    let o = checkWin("O")
    if( x == true)
    {
     setWinner("X")
    }
    else if( o == true)
    {
      setWinner("O")
    }
    else 
    {
      let flag =false;
      for(let item of board)
      {
        if(item == " ")
        {
          flag = true;
          break;
        } 
      }
      if(flag==false)
        {
          setWinner("No one")
        }  
      
    }
  },[board])

  function resetGame()
  {
    setBoard([" "," "," "," "," "," "," "," "," "])
    setPlayer("X")
    setWinner(null)
  }
  return (
    <div className="text-center mt-5">
      <h3>Tic Tac Toe</h3>
      <h6>Current Player : {player}</h6>
      {
        winner != null? <div><p> game is over {winner} won the game</p> 
        <button onClick={resetGame} className="btn btn-primary btn-sm">Reset Game</button></div> :null
      }
      
      <div className="main mx-auto mt-4">
        {board.map((item, index) => {
          return <Cell index={index} clickFunction={handlePlay} value={item} />
        })}
      </div>
    </div>
  )
}
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


{/* NOTES:
  • In create-react-app relative paths for images don't seem to work. 
    Instead, you can import an image. (refer to line 2)

  • useState is a hook
*/}

function App() {
  {/* 
    Our main method is the render() method, and the render method has a return function.
    In the return function, here we will be returning our elements.
  */}

  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setCPUChoice] = useState('rock');
  const [user_pts, setUser_pts] = useState(0);
  const [CPU_pts, setCPU_pts] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const choices = ['rock', 'paper', 'scissors'];

  {/* 
    line 20 - sets initial choice of the user to be 'rock' image
    line 21 - sets initial choice of the CPU to be 'rock' image
    line 22 - sets points; initial score of user set at 0.
    line 23 - sets points; initial score of CPU set at 0.
    line 24 - Current result is set to null. This updates score.
    line 25 - Determine final result.
    line 26 - Set game-over to false. Once true, 'restart' appears.
    line 27 - choices 
  */}

  const HandleClick = (value) => {
    setUserChoice(value)
    CPU_selectChoice()
  }

  const CPU_selectChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setCPUChoice(randomChoice)
  }

  const Refresh = () => window.location.reload();

  useEffect(() => {
    const selection = userChoice + computerChoice
    if (user_pts <= 4 && CPU_pts <= 4) {
      if (selection === 'scissorspaper' || selection === 'rockscissors' || selection === 'paperrock') {
        // userPoints.current += 1
        const updatedUser_pts = user_pts + 1
        setUser_pts(updatedUser_pts)
        setTurnResult('You win the round')
        if (updatedUser_pts === 3) {
          setResult('You win!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (selection === 'paperscissors' || selection === 'scissorsrock' || selection === 'rockpaper') {
        // computerPoints.current += 1
        const updateCPU_pts = CPU_pts + 1
        setCPU_pts(updateCPU_pts)
        setTurnResult('CPU wins round')
        if (updateCPU_pts === 3) {
          setResult('CPU Wins!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (selection === 'paperpaper' || selection === 'rockrock' || selection === 'scissorsscissors') {
        setTurnResult('Tie! No points awarded.')
      }
    }
  }, [computerChoice, userChoice])
  return (
    <div className="App">
      <header className="App-header">
        <h6>
          {/* Links to GitHub project page */}
          <a
            className="App-link"
            href="https://github.com/cvu232/RPS-1012/blob/main/README.txt" target="_blank" rel="noopener noreferrer">
            <i>Cutting Edge</i>
          </a> Presents:
        </h6>
        <h1>
          ROCK PAPER SCISSORS
        </h1>
      </header>
      <div className='Score'>
        <h5>User Points: {user_pts}</h5>
        <h5>CPU: {CPU_pts}</h5>
      </div>

      <div className='Choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>

      <div className='Button-div'>
        {choices.map((choice, index) =>
          <button className='Button' key={index} onClick={() => HandleClick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='Current-result'>
        <p>Current Result: {turnResult}</p>
      </div>
      <div className='Final-result'>
        <p>Final Result: {result}</p>
      </div>

      <div className='Button-div'>
        {gameOver &&
          <button className='Button' onClick={() => Refresh()}>Restart Game?</button>
        }
      </div>

      <img src={logo} className="App-logo" alt="logo" />
      <footer>
        Developed By: Saadaf Mohsin, Cindy Vu, and Fouad Shalaby
      </footer>

    </div>


  );

}


export default App;

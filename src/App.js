import logo from './logo.svg';
import start_btn from '../src/images/start.png'
import './App.css';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Start from './components/Start';


{/* NOTES:
  • In create-react-app relative paths for images don't seem to work. 
    Instead, you can import an image. (refer to line 2)
*/}

function App() {
  {/* 
    Our main method is the render() method, and the render method has a return function.
    In the return function, here we will be returning our elements.

    setUserChoice — const to update current value of userChoice
  */}

  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5) {
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('Tie!')
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
      <div className='score'>
        <h5>User Points: {userPoints}</h5>
        <h5>CPU: {computerPoints}</h5>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>

      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='result'>
        <p>Current Result: {turnResult}</p>
        <p>Final Result: {result}</p>
      </div>

      <div className='button-div'>
        {gameOver &&
          <button className='button' onClick={() => reset()}>Restart Game?</button>
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
{/* 
<img
  className="start"
  src={start_btn}
  alt="start.png"
  onClick={() => { alert("Hello World"); }}
/>

<Start></Start>
<p>test!</p>
*/}

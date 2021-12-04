import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'; // Importing 2 hooks (useState, useEffect).


{/* NOTES:
  • In create-react-app relative paths for images don't work. 
    Instead, you can import an image. (refer to line 2)

  • useState, useEffect are hooks.
*/}

function App() {
  {/* 
    Our main method is the render() method, and the render method has a return function.
    In the return function, here we will be returning our elements.
  */}

  const [userOption, setUserOption] = useState('rock');
  const [CPUoption, setCPUoption] = useState('rock');
  const [user_pts, setUser_pts] = useState(0);
  const [CPU_pts, setCPU_pts] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const options = ['rock', 'paper', 'scissors'];

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

  {/* Line 44:
    According to the buttonClick, we will be setting the user's choice.
  */}

  const HandleClick = (choice) => {
    setUserOption(choice)
    CPU_selectChoice()
  }

  const CPU_selectChoice = () => {
    const randomChoice = options[Math.floor(Math.random() * options.length)]
    setCPUoption(randomChoice)
  }

  const Refresh = () => window.location.reload();

  useEffect(() => {
    const selection = userOption + CPUoption
    if (user_pts <= 2 && CPU_pts <= 2) {
      if (selection == 'scissorspaper' || selection == 'rockscissors' || selection == 'paperrock') {
        // userPoints.current += 1
        const updatedUser_pts = user_pts + 1
        setUser_pts(updatedUser_pts)
        setTurnResult('You win the round')
        if (updatedUser_pts == 3) {
          setResult('You win!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (selection == ('paperscissors' || 'scissorsrock' || 'rockpaper')) {
        // computerPoints.current += 1
        const updateCPU_pts = CPU_pts + 1
        setCPU_pts(updateCPU_pts)
        setTurnResult('CPU wins round')
        if (updateCPU_pts == 3) {
          setResult('CPU Wins!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      else if (selection == ('paperpaper' || 'rockrock' || 'scissorsscissors')) {
        setTurnResult('Tie! No points awarded.')
      }
    }
  }, [CPUoption, userOption])
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
      <div className='Score'>               {/* Scoreboard display */}
        <h5>User Points: {user_pts}</h5>
        <h5>CPU: {CPU_pts}</h5>
      </div>

      <div className='Option'>
        <div className='choice-user'>
          <img className='User-hand' src={`../images/${userOption}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='CPU-hand' src={`../images/${CPUoption}.png`} alt=''></img>
        </div>
      </div>

      {/* Functionality of line____ - ____:
        options.map maps [rock, paper, scissors] to an index number.
        => "return"
        the key, key being index of [rock, paper, scissors]

        inside our onClick function, we are going to pass 'choice'
        onClick traverses the list of the 3 choices, and creates three buttons.
      */}

      <div className='Button-div'>
        {options.map((choice, index) =>
          <button className='Button'
            key={index}
            onClick={() => HandleClick(choice)}
            disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='Current-result'>     {/* Displays current round's result */}
        <p>Current Result: {turnResult}</p>
      </div>
      <div className='Final-result'>       {/* Display winner after CPU/User reaches 3 pts. */}
        <p>Final Result: {result}</p>
      </div>

      {/*
        Once const 'gameOver'=False set to True,
        Then rock, paper, scissors buttons will be disabled, and
        Refresh button (line 137) will appear. 

        The boolean value of 'gameOver' indicates whether game is over.
        Essentially, if game is over, restart game. 
      */}

      <div className='Button-div'>
        {gameOver &&
          <button className='Button'
            onClick={() => Refresh()}>Restart Game?
          </button>
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

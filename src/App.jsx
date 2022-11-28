import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import {useContext} from 'react'
import { QuizContext } from './context/quiz';
import Questions from './components/Questions';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS"})
}, [])

  return (
    <div className="App">
      <h1>Quiz de Progamaçao</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  );
}

export default App;

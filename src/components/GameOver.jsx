import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';

import './GameOver.css';

function GameOver() {
  const[quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuaçao: {quizState.score}</p>
      <p>Voçe acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={WellDone} alt="Muito Bem" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
}

export default GameOver;

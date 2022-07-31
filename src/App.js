import { useState } from "react";
import './index.css'

const App = () => {
  const [value, setValue] = useState("");
  const [winningScore, setWinningSCore] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [player1Score, setPlayer1Score] = useState("");
  const [player2Score, setPlayer2Score] = useState("");
  const [btnClick1, setBtnclick1] = useState(false);
  const [btnClick2, setBtnclick2] = useState(false);
  const [result, setResult] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    // console.log(value);

    setWinningSCore(value);
    setValue("");
    // console.log(typeof value);
  };


  const p1RandNum = () => {
    setRandomNumber(Math.floor(Math.random() * winningScore) + 1);
    setPlayer1Score(randomNumber);
    setBtnclick2(true);
    setBtnclick1(false);
    console.log(winningScore);
    console.log(player1Score);
    if (player1Score === winningScore) {
      setBtnclick1(true);
      setBtnclick2(true);
      setPlayer1Score("");
      setPlayer2Score("");
      setResult("Player 1 Won The Game");
    }
  };
  const p2RandNum = () => {
    setRandomNumber(Math.floor(Math.random() * winningScore) + 1);
    setPlayer2Score(randomNumber);
    setBtnclick1(true);
    setBtnclick2(false);
    if (winningScore === player2Score) {
      setBtnclick1(true);
      setBtnclick2(true);
      setPlayer1Score("");
      setPlayer2Score("");
      setResult("Player 2 Won The Game");
    }
  };

 

  const reset = () => {
    setValue("");
    setWinningSCore("");
    setPlayer1Score("");
    setPlayer2Score("");
    setBtnclick1(false);
    setBtnclick2(false);
    setResult("");
    setWinningSCore("");
  };

  return (
    <div className="container">
      <div className="header">
      <h2>Player VS Player</h2>
      </div>
      
      <div className="winning_score">
      <p>Winning Score: {winningScore} </p>
      <form>
        <input
          type="number"
          onChange={(e) => {
            setValue(+e.target.value);
          }}
          value={value}
        />
        <br />
        <button className="primary-btn" onClick={handleInput}>Submit Winning Score</button>
      </form>
      </div>
     

      <h1>Result: {result} </h1>
      <h4 className="player1Score">Player1 Score : {player1Score} </h4>
      <h4 className="player2Score">Player2 Score : {player2Score} </h4>


      <div className="btn">
      <button className="player1btn primary-btn" onClick={p1RandNum} disabled={btnClick2}>
        Player 1{" "}
      </button>
      <button className="plyer2btn primary-btn" onClick={p2RandNum} disabled={btnClick1}>
        Player 2
      </button>
      <button onClick={reset} className="reset primary-btn">
        Reset
      </button>
      </div>
    </div>
  );
};

export default App;

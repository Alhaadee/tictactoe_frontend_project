import { useEffect, useState } from "react";
import Form from "../components/Form";
import Game from "../components/Game";
import skull from "../assets/skull_cursor.png";
import pumpkin_cursor from "../assets/pumpkin_cursor.png";
import bones_cursor from "../assets/bones_cursor.png";

const GameContainer = () => {
  const [players, setPlayers] = useState([]);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [games, setGames] = useState([]);
  const [player1, setPlayer1] = useState({ name: "" });
  const [player2, setPlayer2] = useState({ name: "" });
  const [score, setScore] = useState([0, 0]);
  const [cursorX,setCursorX]=useState();
  const [cursorY,setCursorY]=useState();
  const [cursorImg,setCursorImg]=useState(`url(${skull})`);

  useEffect(()=>{
    if(player1Turn && games.length>=1) { setCursorImg(`url(${bones_cursor})`)}
    else if (!player1Turn&& games.length>=1){ setCursorImg(`url(${pumpkin_cursor})`)}
    
  },[player1Turn])


    window.addEventListener("mousemove", (event)=>{
        setCursorX(event.pageX-16)
        setCursorY(event.pageY-16)
    })

  const addPlayer1name = (formData) => {
    setPlayer1({ name: formData });
  };
  const addPlayer2name = (formData) => {
    setPlayer2({ name: formData });
  };

  // post player
  const addPlayer = async (player) => {
    const response = await fetch(
      `http://localhost:8080/players?name=${player}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }
    );
    const savedPlayer = await response.json();
    setPlayers([...players, savedPlayer]);
  };

  // post request to start new game
  const postGame = async () => {
    const response = await fetch(
      `http://localhost:8080/games/start?player1Id=1`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      }
    );
    const savedGame = await response.json();
    setGames([...games, savedGame]);
  };

  // patch to update game status

  const makeMove = async (gridPosition) => {
    if (player1Turn) {
      var playerPosition = 0;
    } else {
      playerPosition = 1;
    }

    let gameNumber = games[games.length -1].id;

    const response = await fetch(
      `http://localhost:8080/games/${playerPosition}/${gameNumber}/${gridPosition}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gridPosition),
      }
    );

    const updatedGame = await response.json();

    // updates the scoreboard
    const copiedScore = [...score];
    if (updatedGame.winner === "X") {
      copiedScore[0] = copiedScore[0] + 1;
    } else if (updatedGame.winner === "O") {
      copiedScore[1] = copiedScore[1] + 1;
    }
    setScore(copiedScore);

    // updates the games state
    const updatedGames = games.map((game) => {
      if (game.id === updatedGame.id) {
        return updatedGame;
      } else {
        return game;
      }
    });
    setGames(updatedGames);
    // flip the turn to the other player
    setPlayer1Turn(!player1Turn);
  };

  // reset score on name change
  useEffect(()=>{
    setScore([0,0]);
  },[player1])


  // determines which player's turn it is
  const displayTurn = () => {
    if (player1Turn) {
      return <h3>{player1.name}'s turn</h3>;
    } else {
      return <h3>{player2.name}'s turn</h3>;
    }
  };

  return (
    <div className="main_container">
        <div className="cursor"
        style={{
            left: cursorX+'px',
            top: cursorY+'px',
            backgroundImage: cursorImg
        }}
        
        ></div>
      <h1>Tic Tac Toe</h1>
      <Form
        addPlayer={addPlayer}
        addPlayer2name={addPlayer2name}
        addPlayer1name={addPlayer1name}
      />
      <br />
      {player1.name && player2.name ? (
        <h3 className="displayNames">
          {player1.name} &nbsp; <img className="bonesImg" src={bones_cursor} alt="crossed bones" /> &nbsp; &nbsp; vs &nbsp; &nbsp; {player2.name} &nbsp; <img className="pumpkinImg" src={pumpkin_cursor} alt="pumpkin" />
        </h3>
      ) : (
        <div></div>
      )}
      {player1.name ? <button className="start_button" onClick={postGame}>Start New Game</button> : <div></div>}
      <br />
      {games.length >= 1 ? (
        <Game
          game={games[games.length - 1]}
          makeMove={makeMove}
          player1Turn={player1Turn}
          player2={player2}
          player1={player1}
          displayTurn={displayTurn}
        />
      ) : (
        <div></div>
      )}
      {
        games.length >=1 ?       <h2 className="scoreboard"> Score: &nbsp; {score[0]}:{score[1]}</h2> : <div></div>

      }
    </div>
  );
};

export default GameContainer;
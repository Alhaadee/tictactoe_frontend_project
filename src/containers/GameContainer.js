import { useState } from "react";
import Form from "../components/Form";
import Game from "../components/Game";


const GameContainer = () => {
    const [players, setPlayers] = useState([]);
    const [player1Turn, setPlayer1Turn] = useState(true);
    const [game, setGame] = useState({});
    
    // post player
    const addPlayer = async (player) => {
        const response = await fetch(`http://localhost:8080/players?name=${player.name}` , {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(player)
        });
        const savedPlayer = await response.json();
        setPlayers([...players, savedPlayer]);
    }
    // post request to start new game
  

    const postGame = async () => {
        const response = await fetch(`http://localhost:8080/games/start?player1Id=1`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
        const savedGame = await response.json();
        setGame(savedGame);
    }

      // connect to game


    // patch to update game status 
        
        const makeMove =  async (gameId,gridPosition) => {
            if(player1Turn){
                var playerPosition = 0;
        }   else {
                playerPosition = 1;
            };
        
        const response = await fetch(`http://localhost:8080/games/${playerPosition}/${gameId}/${gridPosition}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(gameId,gridPosition)
            });

            const updatedGame = await response.json();
            setGame(updatedGame)
        
            setPlayer1Turn(!player1Turn)
        } 

        const checkWinner = ()=>{
            console.log(game.winner);
            
            if(game.winner==="X"){
                return (
                "X"
                )
            }else if(game.winner==="O"){
                return (
                "O"
                )
            }
        }

            // const updatedGames = games.map((game)=>{
            //     if (game.id === updatedGame.id){
            //         return updatedGame;
            //     } else {
            //         return game;
            //     }
            // })
            // setGames(updatedGames);

        

    return (
        <div className="main_container">
            <h1>Tic Tac Toe</h1>
            <Form addPlayer = {addPlayer}/>
            <button onClick={postGame}>Start New Game</button>
            <br />
            <Game game={game} makeMove = {makeMove} player1Turn={player1Turn} checkWinner = {checkWinner}/>
        


        </div>
    )
}




export default GameContainer;
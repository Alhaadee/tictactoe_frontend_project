import { useState } from "react";
import Form from "../components/Form";
import Game from "../components/Game";


const GameContainer = () => {
    const [players, setPlayers] = useState([]);
    const [player1Turn, setPlayer1Turn] = useState(true);
    const [games, setGames] = useState([]);
    const [player1,setPlayer1]=useState({name:""})
    const [player2,setPlayer2]=useState({name:""})

    const addPlayer1name=(formData)=>{
        setPlayer1({name: formData})
    }
    const addPlayer2name=(formData)=>{
        setPlayer2({name: formData})
    }

    
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
        setGames([...games,savedGame]);
    }

    // connect to game


    // patch to update game status 
        
        const makeMove =  async (gridPosition) => {
            if(player1Turn){
                var playerPosition = 0;
        }   else {
                 playerPosition = 1;
            };

        let gameNumber = games.length;
        
        const response = await fetch(`http://localhost:8080/games/${playerPosition}/${gameNumber}/${gridPosition}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(gridPosition)
            });

            const updatedGame = await response.json();
            const updatedGames = games.map((game)=>{
                if (game.id === updatedGame.id){
                    return updatedGame;
                } else {
                    return game;
                }
            })
            setGames(updatedGames);
            setPlayer1Turn(!player1Turn)
        }    

    return (
        <div className="main_container">
            <h1>Tic Tac Toe</h1>
            <Form addPlayer = {addPlayer} addPlayer2name={addPlayer2name} addPlayer1name={addPlayer1name}/>
            <br />
           {player1.name && player2.name ? <h3>{player1.name} and {player2.name} have joined the game</h3>: 
           <div></div>}
            <button onClick={postGame}>Start New Game</button>
            <br />
            {games.length >=1 ? <Game game={games[(games.length)-1]} makeMove = {makeMove} player1Turn = {player1Turn} player2={player2} player1={player1}/>:
            <div></div>
            }
        </div>
    )
}




export default GameContainer;
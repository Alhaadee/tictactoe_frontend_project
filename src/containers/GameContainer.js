import { useState } from "react";


const GameContainer = () => {
    const [players, setPlayers] = useState([]);
    const [player1Turn, setPlayer1Turn] = useState(true);
    const [games, setGames] = useState([]);
    
    // post player
    const addPlayer = async (playerName) => {
        const response = await fetch("http://localhost:8080/players?name="+ playerName, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerName)
        });
        const savedPlayer = await response.json();
        setPlayers([...players, savedPlayer]);
    }
    // post request to start new game
  

    const postGame = async (playerId) => {
        const response = await fetch("http://localhost:8080/games/start?player1Id=" + playerId, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerId)
        })
        const savedGame = await response.json();
        setGames([...games, savedGame]);
    }

      // connect to game


    // patch to update game status 
        const makeMove =  async (playerArrayListPosition,gameId,gridPosition) => {
            const response = await fetch(` http://localhost:8080/games/${playerArrayListPosition}/${gameId}/${gridPosition}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(playerArrayListPosition,gameId,gridPosition)
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
        }

    return (
        <div className="main_container">
            


        </div>


    );
    }


export default GameContainer;
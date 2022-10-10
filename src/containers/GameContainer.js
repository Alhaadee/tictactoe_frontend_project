import { useState } from "react";


const GameContainer = () => {
    const [players, setPlayers] = useState([]);
    const [player1Turn, setPlayer1Turn] = useState(true);
    
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
    // connect to game
    // patch to update game status 

    const fetchGame

    return (
        <div className="main_container">
            


        </div>


    );

}

export default GameContainer;
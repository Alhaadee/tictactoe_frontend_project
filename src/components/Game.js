import Grid from "./Grid"


const Game = ({game, makeMove, player1Turn,player2, player1, displayTurn}) => {


return (
    <>
    
   

    {/* message saying who won the game */}
    <div className="winner">
        { game.winner === "X" ? <h2>{player1.name} wins</h2> : <div></div> }
        { game.winner === "O" ? <h2>{player2.name} wins</h2> : <div></div> }
    </div>
    <div className="board">
        <div className = "top-left"><Grid className = "top-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "top-middle"><Grid className = "top-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "top-right"><Grid className = "top-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "middle-left"><Grid className = "middle-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "middle-middle"><Grid className = "middle-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "middle-right"><Grid className = "middle-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "bottom-left"><Grid className = "bottom-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "bottom-middle"><Grid className = "bottom-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
        <div className = "bottom-right"><Grid className = "bottom-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} /></div>
       

    </div>
    {player1.name ? displayTurn():<div></div> }
    </>

)


}

export default Game;

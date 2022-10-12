import Grid from "./Grid"


const Game = ({game, makeMove, player1Turn,player2, player1, displayTurn}) => {


return (
    <>
    
    {player1.name ? displayTurn():<div></div> }

    {/* message saying who won the game */}
    <div>
        { game.winner === "X" ? <h2>{player1.name} wins</h2> : <div></div> }
        { game.winner === "O" ? <h2>{player2.name} wins</h2> : <div></div> }
    </div>
    <div className="board">
        <Grid className = "top-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "top-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "top-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "middle-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "middle-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "middle-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "bottom-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "bottom-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
        <Grid className = "bottom-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn} />
       

    </div>
    </>

)


}

export default Game;

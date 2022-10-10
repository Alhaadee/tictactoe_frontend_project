import Grid from "./Grid"


const Game = ({game, makeMove, player1Turn}) => {


    const checkWinner = ()=>{
        console.log(game.winner);
        if(game.winner==="X"){
            return (
            <h2>player 1 wins</h2>
            )
        }else if(game.winner==="O"){
            return (
            <h2>player 2 wins</h2>
            )
        }
        
    }

return (
    <>

    {checkWinner}
    <div className="board">
        <Grid className = "top-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "top-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "top-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "middle-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "middle-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "middle-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "bottom-left" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "bottom-middle" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
        <Grid className = "bottom-right" makeMove = {makeMove} game = {game} player1Turn={player1Turn}/>
       

    </div>
    </>

)


}

export default Game;

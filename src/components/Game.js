import Grid from "./Grid"


const Game = ({game, makeMove}) => {







return (
    <div className="board">
        <Grid className = "top-left" makeMove = {makeMove} game = {game}/>
        <Grid className = "top-middle" makeMove = {makeMove} game = {game}/>
        <Grid className = "top-right" makeMove = {makeMove} game = {game}/>
        <Grid className = "middle-left" makeMove = {makeMove} game = {game}/>
        <Grid className = "middle-middle" makeMove = {makeMove} game = {game}/>
        <Grid className = "middle-right" makeMove = {makeMove} game = {game}/>
        <Grid className = "bottom-left" makeMove = {makeMove} game = {game}/>
        <Grid className = "bottom-middle" makeMove = {makeMove} game = {game}/>
        <Grid className = "bottom-right" makeMove = {makeMove} game = {game}/>
       

    </div>


)


}

export default Game;

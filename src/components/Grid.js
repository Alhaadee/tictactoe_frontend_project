
const Grid = ({game, makeMove, className}) => {

    const handleClick = () => {
        if(className === "top-right"){
            makeMove(0,1,2)
            console.log("hello");
            console.log(game.board);
        } 
    }



    return(
        <div className="squares" onClick = {handleClick}>
         1
        </div>
    )

}

export default Grid;
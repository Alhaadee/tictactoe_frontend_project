
const Grid = ({game, makeMove, className}) => {

    const handleClick = () => {
        if(className === "top-right"){
            makeMove(0,1,2)
            console.log("hello");
            console.log(game.board);
        } 
    }

    const handleClicking = () => {
        switch(className){
            case "top-left":
            makeMove(1,0)
            break;
            case "top-middle":
            makeMove(1,1)   
            break;
            case "top-right":
            makeMove(1,2)
            break;
            case "middle-left":
            makeMove(1,3)
            break;
            case "middle-middle":
            makeMove(1,4)
            break;
            case "middle-right":
            makeMove(1,5)
            break;
            case "bottom-left":
            makeMove(1,6)
            break;
            case "bottom-middle":
            makeMove(1,7)
            break;
            case "bottom-right":
            makeMove(1,8)
        }
        console.log(game.board);
    }


    return(
        <div className="squares" onClick = {handleClicking}>
         1
        </div>
    )

}

export default Grid;
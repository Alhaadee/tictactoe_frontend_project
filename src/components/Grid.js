import { useState } from "react";

const Grid = ({game, makeMove, className, player1Turn}) => {

    const [icon,setIcon]=useState(null);
    const [clicked,setClicked]=useState(false);


    const handleClick = () => {
        setClicked(true)
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
        player1Turn ? setIcon(<img className="icon" src="./assets/bones_icon.jpg" alt="crossed bones"/> ):setIcon(<img className="icon" src="./assets/pumpkin_icon.jpeg" alt="pumpkin"/> ) 

    }
 

    return(
        clicked ? <div className="squares" >{icon} </div> :  <div className="squares" onClick = {handleClick} ></div> 
    )

}

export default Grid;
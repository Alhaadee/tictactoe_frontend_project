import { useState } from "react";
import bones from "../assets/bones_icon.jpg";
import pumpkin from "../assets/pumpkin_icon.jpeg";


const Grid = ({game, makeMove, className, player1Turn}) => {

    const [icon,setIcon]=useState(null);
    const [clicked,setClicked]=useState(false);


    const handleClick = () => {
        
        if(!game.winner){
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
            
            player1Turn ? setIcon( <img className="icon" src={bones} alt="crossed bones"/>):setIcon( <img className="icon" src={pumpkin} alt="pumpkin"/>) 
        }
        console.log(game.board);
       

    }


    return(
        clicked ? <div className="squares" >{icon} </div> :  <div className="squares" onClick = {handleClick} ></div>

    )

}

export default Grid;
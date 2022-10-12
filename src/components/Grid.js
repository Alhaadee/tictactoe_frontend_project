import { useEffect, useState } from "react";
import bones from "../assets/bones_icon.png";
import pumpkin from "../assets/pumpkin_icon.png";

const Grid = ({ game, makeMove, className, player1Turn }) => {
  const [icon, setIcon] = useState(null);
  const [clicked, setClicked] = useState(false);

  const wipeGrid = () => {
    setClicked(false);
    setIcon(null);
  };

  // returns to its original state if the game ID changes
  useEffect(() => {
    wipeGrid();
  }, [game.id]);

  const handleClick = () => {
    if (!game.winner) {
      setClicked(true);
      switch (className) {
        case "top-left":
          makeMove(0);

          break;
        case "top-middle":
          makeMove(1);

          break;
        case "top-right":
          makeMove(2);
          break;
        case "middle-left":
          makeMove(3);
          break;
        case "middle-middle":
          makeMove(4);
          break;
        case "middle-right":
          makeMove(5);

          break;
        case "bottom-left":
          makeMove(6);
          break;
        case "bottom-middle":
          makeMove(7);
          break;
        default:
          makeMove(8);
      }

      player1Turn
        ? setIcon(<img className="icon" src={bones} alt="crossed bones" />)
        : setIcon(<img className="icon" src={pumpkin} alt="pumpkin" />);
    }
  };

  return clicked ? (
    <div className="squares">{icon} </div>
  ) : (
    <div className="squares" onClick={handleClick}></div>
  );
};

export default Grid;

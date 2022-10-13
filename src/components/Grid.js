import { useEffect, useState } from "react";
import bones from "../assets/bones_icon.png";
import pumpkin from "../assets/pumpkin_icon.png";
import bonesClip from '../sounds/bone-cracking.mp3';
import pumpkinClip from '../sounds/thump.mp3';

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

  // icons
  const bonesIcon = () => {
    setIcon(<img className='icon' src={bones} alt='crossed bones' />)
  }
  const pumpkinIcon = () => {
    setIcon(<img className='icon' src={pumpkin} alt='pumpkin' />)
  }


  //icon sounds
  const bonesSound = () => {
    let bonesAudio = new Audio(bonesClip)
    bonesAudio.play()
    bonesAudio.volume = 0.15
  }
  const pumpkinSound = () => {
    let pumpkinAudio = new Audio(pumpkinClip)
    pumpkinAudio.play()
    pumpkinAudio.volume = 0.15
  }


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

      player1Turn ? bonesIcon() : pumpkinIcon();
        player1Turn ? bonesSound() : pumpkinSound();
    }
  };

  return clicked ? (
    <div className="squares">{icon} </div>
  ) : (
    <div className="squares" onClick={handleClick}></div>
  );
};

export default Grid;

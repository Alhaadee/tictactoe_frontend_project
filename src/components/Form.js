import { useState } from "react";

const Form = ({ addPlayer1name, addPlayer2name, addPlayer }) => {
  const [statePlayer1, setStatePlayer1] = useState("");
  const [statePlayer2, setStatePlayer2] = useState("");
  const [statePlayer, setStatePlayer] = useState({ name: "" });

  const handleChange = (event) => {
    let copiedPlayer = { ...statePlayer };
    copiedPlayer.name = event.target.value;
    setStatePlayer(copiedPlayer);
    const updatedPlayer1 = event.target.value;
    setStatePlayer1(updatedPlayer1);
  };
  const handlePlayer2 = (event) => {
    const updatedPlayer2 = event.target.value;
    setStatePlayer2(updatedPlayer2);
    console.log(statePlayer2);
  };

  const handleForm = (event) => {
    event.preventDefault();
    addPlayer(statePlayer1);
    // setStatePlayer1(statePlayer.name);
    addPlayer1name(statePlayer1);
    addPlayer2name(statePlayer2);
    setStatePlayer1("");
    setStatePlayer2("");
    setStatePlayer({ name: "" });
  };

  return (
    <div>
      <form onSubmit={handleForm} className="form">
        <h3 className="addPlayerText">Add Players to Start</h3>
        <div className="labelContainer">
          <div className="labels">
            <label htmlFor="name">Player 1:</label>
            &nbsp;
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={statePlayer.name}
            />
          </div>

          <div className="labels">
            <label htmlFor="name">Player 2:</label>
            &nbsp;
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handlePlayer2}
              value={statePlayer2}
            />
          </div>
        </div>

        <br></br>

        <button type="submit">Submit Names</button>
      </form>
    </div>
  );
};

export default Form;

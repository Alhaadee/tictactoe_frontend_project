import { useState } from "react";

const Form = ({addPlayer}) => {

    const [playerName,setPlayerName] = useState("");

    const handleChange = (input) => {
        setPlayerName(input.target.value)
    }

    const handleForm = (event) => {
        event.preventDefault();
        addPlayer(playerName)
    }

    return (
    <div>
        <form onSubmit={handleForm}>
            <h3>Add A New Player</h3>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                placeholder="Player Name"
                name="name"
                onChange={handleChange}
                value={playerName}
            />

            <button type="submit">Add</button>
        </form>
    </div>

    )

}

export default Form;
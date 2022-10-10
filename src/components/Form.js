import { useState } from "react";

const Form = ({addPlayer}) => {

    const [statePlayer,setStatePlayer] = useState({
        name: ""
    });

    const handleChange = (event) => {
        let copiedPlayer = {...statePlayer}
        copiedPlayer.name = event.target.value
        setStatePlayer(copiedPlayer);
    }

    const handleForm = (event) => {
        event.preventDefault();
        addPlayer(statePlayer);
        setStatePlayer({
            name: ""
        });
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
                value={statePlayer.name}
            />

            <button type="submit">Add</button>
        </form>
    </div>

    )

}

export default Form;
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const App = () => {
    const [input, setInput] = useState("");
    const [ note, setNote] = useState (["Note 1", "Note 2","Note 3"]);
    

    const addNote = () =>{
                let storedNote = [...note]
                storedNote.push(input)
                setNote(storedNote)
            }
    const removeNote = (index) => {
                let storedNote = [...note]
                storedNote.splice(index, 1)
                setNote(storedNote)
    }        

    const changeHandler = (event) => {
        setInput(event.target.value)
    }
    return (
        <div className ="container">
            <h1>My Notes:</h1>
            <input type="text" placeholder="Add note here" onChange={changeHandler}/>
            <button onClick={addNote}>add note</button>
            <p>{input}</p>  
            {note.map((note, index) => {
            return (
            <div key={index}>                   
            <h2 className="note">{note}
            <button className="delete-btn" onClick={() => removeNote (index)}><DeleteForeverIcon /></button></h2>
            </div> 
            )
        })}
        </div>
    );
}

export default App

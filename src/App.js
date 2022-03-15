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


// import { useState } from "react";

// import logo from './logo.svg';
// import './App.css';
// import Note from './Note';
// import List from './List';



// const App =(List) => {
//   return (
//     <div className="App">
//         {List.map((List, index)=>{
//             return (
//               <div>
//              <Note title = {List.title} content = {List.content}/>
//              <p key ={index}></p>
//              </div>
//             );
//         })}
            
//     </div>
     
//   );
// }

// export default App;

// const App =() => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
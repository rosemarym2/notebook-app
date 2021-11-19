import { useState } from "react";

import logo from './logo.svg';
import './App.css';
import Note from './Note';
import List from './List';



const App =(List) => {
  return (
    <div className="App">
        {List.map((List, index)=>{
            return (
              <div>
             <Note title = {List.title} content = {List.content}/>
             <p key ={index}></p>
             </div>
            );
        })}
            
    </div>
     
  );
}

export default App;

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
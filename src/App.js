import React from 'react';
import WordCounter from './Wordcounter';

function App() {
  return (
    <div style={{marginTop:"200px", paddingRight:"100px", marginLeft:"450px", paddingLeft:"100px",border:"2px solid grey",width:"30%",height:"50%"}}>
      <h1>Word Counter</h1>
      <WordCounter />
    </div>
  );
}

export default App;


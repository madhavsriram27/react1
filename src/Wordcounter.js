import React, { useState } from 'react';

function Wordcounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = event => {
    const newText = event.target.value;
    setText(newText);
    setWordCount(getWordCount(newText));
  };

  const getWordCount = text => {
    // Remove leading/trailing white spaces
    const trimmedText = text.trim();
    // Split the text into an array of words
    const words = trimmedText.split(/\s+/);
    // Return the number of words
    return words.length;
  };

  return (
    <div style={{margin:"50px",border:"2px"}}>
      <textarea value={text} onChange={handleChange} />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default Wordcounter;

import React, { useState } from 'react';

const EventHandling = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Event Handling</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
      <p>Text: {text}</p>
    </div>
  );
};

export default EventHandling;

"use client";

import React, { useState } from 'react';

interface InputBoxProps {
  onSend: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex p-4 bg-white border-t">
      <input
        type="text"
        className="flex-1 border rounded px-2 py-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder='Enter text'
      />
      <button
        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
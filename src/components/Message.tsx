"use client";


import React from 'react';

interface MessageProps {
  text: string;
  user: 'bot' | 'user';
}

const Message: React.FC<MessageProps> = ({ text, user }) => {
  return (
    <div className={`my-2 p-2 rounded ${user === 'user' ? 'bg-blue-200 self-end' : 'bg-green-200 self-start'}`}>
      <div className="font-bold text-gray-500 opacity-75 text-10px">{user === 'user' ? 'You' : 'Bot'}</div>
      <div>{text}</div>
    </div>
  );
};

export default Message;
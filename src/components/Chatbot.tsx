"use client"

import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';

interface Message {
  text: string;
  user: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([{ text: 'Welcome to the chatbot!', user: 'bot' }]);
    }
  }, []);

  useEffect(() => {
    if(messages.length){
    localStorage.setItem('messages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = (input: string) => {
    const newMessages:any = [...messages, { text: input, user: 'user' }];
    setMessages(newMessages);
    setTimeout(() => {
      const botResponse = generateRandomResponse();
      setMessages([...newMessages, { text: botResponse, user: 'bot' }]);
    }, 500);
  };

  const generateRandomResponse = () => {
    const responses = [
      'Lorem ipsum dolor sit amet.',
      'Consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt.',
      'Ut labore et dolore magna aliqua.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="flex flex-col w-7/10 h-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center text-2xl font-bold mb-4 mt-4">Chatbot</div>
        <MessageList messages={messages} />
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chatbot;
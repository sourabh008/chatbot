"use client";

import React, { useRef, useEffect } from 'react';
import Message from './Message';

interface Message {
  text: string;
  user: 'bot' | 'user';
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} user={msg.user} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;